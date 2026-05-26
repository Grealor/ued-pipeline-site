import mermaid from 'mermaid'
import { useEffect, useId, useRef, useState } from 'react'

type MermaidDiagramProps = {
  chart: string
  className?: string
  theme?: 'neutral' | 'dark'
}

let mermaidInitialized = false
let mermaidTheme: 'neutral' | 'dark' = 'neutral'

function ensureMermaidInit(theme: 'neutral' | 'dark') {
  if (mermaidInitialized && mermaidTheme === theme) return
  mermaid.initialize({
    startOnLoad: false,
    theme: theme === 'dark' ? 'dark' : 'neutral',
    securityLevel: 'strict',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    ...(theme === 'dark' && {
      themeVariables: {
        primaryColor: '#1e293b',
        primaryTextColor: '#e2e8f0',
        primaryBorderColor: '#38bdf8',
        lineColor: '#64748b',
        secondaryColor: '#0f172a',
        tertiaryColor: '#334155',
      },
    }),
  })
  mermaidInitialized = true
  mermaidTheme = theme
}

export function MermaidDiagram({
  chart,
  className = '',
  theme = 'neutral',
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reactId = useId()
  const diagramId = `mermaid-${reactId.replace(/:/g, '')}`
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !chart.trim()) return

    let cancelled = false

    async function render() {
      try {
        ensureMermaidInit(theme)
        setError(null)
        const { svg } = await mermaid.render(diagramId, chart.trim())
        if (!cancelled && container) {
          container.innerHTML = svg
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : '图表渲染失败')
          if (container) container.innerHTML = ''
        }
      }
    }

    void render()

    return () => {
      cancelled = true
    }
  }, [chart, diagramId, theme])

  if (error) {
    return (
      <pre
        className={`overflow-x-auto rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 ${className}`}
        role="alert"
      >
        {error}
      </pre>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`mermaid-diagram flex justify-center overflow-x-auto [&_svg]:max-w-full ${className}`}
      aria-label="流程图"
    />
  )
}
