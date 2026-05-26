import { MousePointer2, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react'
import { Transformer } from 'markmap-lib'
import { Markmap, deriveOptions } from 'markmap-view'
import { useEffect, useRef, type ReactNode } from 'react'
import { wikiMarkdown } from '../data/wiki-overview'

const transformer = new Transformer()

export function WikiOverview() {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const mmRef = useRef<Markmap | null>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const { root, frontmatter } = transformer.transform(wikiMarkdown)

    const options = deriveOptions({
      ...(frontmatter as { markmap?: Record<string, unknown> })?.markmap,
      // 自定义观感：曲线柔顺、节点不省略、初始展开到底
      duration: 280,
      maxWidth: 240,
      initialExpandLevel: -1,
      paddingX: 12,
      spacingHorizontal: 96,
      spacingVertical: 12,
    })

    const mm = Markmap.create(svg, options, root)
    mmRef.current = mm

    return () => {
      mm.destroy()
      mmRef.current = null
    }
  }, [])

  return (
    <div className="relative h-[78vh] min-h-[600px] overflow-hidden rounded-xl border border-hairline bg-canvas">
      {/* 右上角工具栏 */}
      <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-lg border border-hairline-soft bg-canvas/90 p-1 shadow-sm backdrop-blur">
        <ToolbarBtn onClick={() => mmRef.current?.rescale(1.25)} label="放大">
          <ZoomIn className="h-4 w-4" aria-hidden />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => mmRef.current?.rescale(0.8)} label="缩小">
          <ZoomOut className="h-4 w-4" aria-hidden />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => mmRef.current?.fit()} label="复位">
          <RotateCcw className="h-4 w-4" aria-hidden />
        </ToolbarBtn>
      </div>

      {/* 左下角操作提示 */}
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-md border border-hairline-soft bg-canvas/90 px-2 py-1 text-[10px] text-muted shadow-sm backdrop-blur">
        <MousePointer2 className="h-3 w-3" aria-hidden />
        <span>拖拽平移 · 滚轮缩放 · 点击节点折叠 · 双击复位</span>
      </div>

      {/* Markmap SVG 画布 */}
      <svg
        ref={svgRef}
        className="h-full w-full"
        onDoubleClick={() => mmRef.current?.fit()}
      />
    </div>
  )
}

function ToolbarBtn({
  onClick,
  label,
  children,
}: {
  onClick: () => void
  label: string
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-strong hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-rausch/40"
    >
      {children}
    </button>
  )
}
