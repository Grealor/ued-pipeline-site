import { MousePointer2, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react'
import type { ReactNode } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { wikiMindmap } from '../data/wiki-overview'
import { MermaidDiagram } from './MermaidDiagram'

export function WikiOverview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-hairline bg-canvas">
      <TransformWrapper
        initialScale={0.9}
        minScale={0.3}
        maxScale={3}
        centerOnInit
        limitToBounds={false}
        doubleClick={{ mode: 'reset' }}
        wheel={{ step: 0.15 }}
        panning={{ velocityDisabled: false }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* 右上角工具栏 */}
            <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-lg border border-hairline-soft bg-canvas/90 p-1 shadow-sm backdrop-blur">
              <ToolbarBtn onClick={() => zoomIn()} label="放大">
                <ZoomIn className="h-4 w-4" aria-hidden />
              </ToolbarBtn>
              <ToolbarBtn onClick={() => zoomOut()} label="缩小">
                <ZoomOut className="h-4 w-4" aria-hidden />
              </ToolbarBtn>
              <ToolbarBtn onClick={() => resetTransform()} label="复位">
                <RotateCcw className="h-4 w-4" aria-hidden />
              </ToolbarBtn>
            </div>

            {/* 左下角操作提示 */}
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-md border border-hairline-soft bg-canvas/90 px-2 py-1 text-[10px] text-muted shadow-sm backdrop-blur">
              <MousePointer2 className="h-3 w-3" aria-hidden />
              <span>拖拽平移 · 滚轮缩放 · 双击复位</span>
            </div>

            {/* 主可交互画布 */}
            <TransformComponent
              wrapperClass="!w-full !h-[75vh] !min-h-[560px] !bg-surface-soft"
              contentClass="!flex !items-center !justify-center"
            >
              <div className="px-8 py-6">
                <MermaidDiagram chart={wikiMindmap} />
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
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
