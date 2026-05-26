import { Compass, GitBranch, Layers3, Sparkles } from 'lucide-react'
import { wikiBranches, wikiCategoryMeta, wikiStats } from '../data/wiki-overview'

export function WikiOverviewSidebar() {
  const grouped = wikiBranches.reduce<Record<string, typeof wikiBranches>>((acc, b) => {
    acc[b.category] = acc[b.category] ?? []
    acc[b.category].push(b)
    return acc
  }, {})

  const order: (keyof typeof wikiCategoryMeta)[] = [
    'org',
    'c-end',
    'b-end',
    'engine',
    'spec',
    'plan',
  ]

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          Wiki Atlas
        </p>
        <h2 className="mt-1 text-lg font-semibold text-ink">全景脑图索引</h2>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          以下为 UED 设计中心 6 类维度的归类 ·{' '}
          <span className="font-medium text-ink">{wikiStats.topLevel} 个一级模块</span> ·{' '}
          约 {wikiStats.leafEstimate} 个叶节点。
        </p>
      </header>

      <section className="space-y-4">
        {order.map((cat) => {
          const items = grouped[cat] ?? []
          if (items.length === 0) return null
          const meta = wikiCategoryMeta[cat]
          return (
            <div key={cat} className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${meta.chipClass}`}
                >
                  {meta.label}
                </span>
                <span className="section-rule" aria-hidden />
                <span className="text-[10px] font-mono text-muted">{items.length}</span>
              </div>
              <ul className="space-y-1.5">
                {items.map((b) => (
                  <li
                    key={b.id}
                    className="flex items-start gap-2 rounded-md border border-transparent px-2 py-1.5 text-xs leading-snug text-body transition-colors hover:border-hairline-soft hover:bg-surface-soft"
                  >
                    <Layers3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-soft" aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-ink">{b.label}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-muted-soft">
                        ≈ {b.children} 子项
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </section>

      <section className="rounded-xl border border-hairline-soft border-l-2 border-l-ink bg-canvas p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <Compass className="h-3.5 w-3.5 text-ink" aria-hidden />
          阅读路径
        </div>
        <ol className="mt-2 space-y-1.5 text-xs leading-relaxed text-body">
          <li>
            <span className="font-mono text-muted">01 · </span>
            先看 <span className="font-medium text-ink">C 端 / B 端业务矩阵</span> 锚定服务对象
          </li>
          <li>
            <span className="font-mono text-muted">02 · </span>
            进入 <span className="font-medium text-ink">品牌 / 营销工程化</span> 看 AI Pipeline 解构
          </li>
          <li>
            <span className="font-mono text-muted">03 · </span>
            汇到 <span className="font-medium text-ink">矩阵规范 + 规范权重决策表</span> 看输出治理
          </li>
        </ol>
      </section>

      <section className="rounded-xl border border-hairline-soft bg-canvas p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <Sparkles className="h-3.5 w-3.5 text-rausch" aria-hidden />
          跨节点关联
        </div>
        <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-body">
          <li className="flex items-baseline gap-1.5">
            <GitBranch className="h-3 w-3 shrink-0 text-muted" aria-hidden />
            <span>C 端 7 个 App ⇢ 品牌矩阵 1.6 二级模板</span>
          </li>
          <li className="flex items-baseline gap-1.5">
            <GitBranch className="h-3 w-3 shrink-0 text-muted" aria-hidden />
            <span>两套工程化 ⇢ 规范权重决策表（统一仲裁）</span>
          </li>
          <li className="flex items-baseline gap-1.5">
            <GitBranch className="h-3 w-3 shrink-0 text-muted" aria-hidden />
            <span>规范 ⇢ 路线图（按 Q 滚动落地）</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
