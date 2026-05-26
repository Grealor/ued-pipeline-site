import { MousePointer2, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react'
import type { ReactNode } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { wikiTreeData, type TreeNode } from '../data/wiki-overview'

export function WikiOverview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-hairline bg-canvas">
      <TransformWrapper
        initialScale={1}
        minScale={0.3}
        maxScale={3}
        centerOnInit
        limitToBounds={false}
        doubleClick={{ mode: 'reset' }}
        wheel={{ step: 0.15 }}
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
              wrapperClass="!w-full !h-[78vh] !min-h-[600px] !bg-canvas"
              contentClass="!flex !items-start !justify-start"
            >
              <div className="px-12 py-10">
                <Branch data={wikiTreeData} />
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

/**
 * Branch —— 极简骨架树
 *   - 每个节点：[label] [若有子树则画一条横向 hairline] [子节点纵向 stack]
 *   - 兄弟节点之间不画竖线，靠 X 列对齐成行
 *   - 形态完全跟随贴的样张
 */
function Branch({ data }: { data: TreeNode }) {
  const hasChildren = !!data.children?.length
  return (
    <div className="flex items-start">
      <div className="shrink-0 whitespace-nowrap py-1 pr-1 text-[13px] leading-relaxed text-ink">
        {data.label}
      </div>
      {hasChildren && (
        <>
          <div
            aria-hidden
            className="mt-[14px] h-px w-10 shrink-0 bg-border-strong"
          />
          <div className="flex flex-col">
            {data.children!.map((child, idx) => (
              <Branch key={`${child.label}-${idx}`} data={child} />
            ))}
          </div>
        </>
      )}
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
