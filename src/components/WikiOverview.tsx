import { Compass, Layers, ListTree, Network } from 'lucide-react'
import {
  wikiBranches,
  wikiCategoryMeta,
  wikiMindmap,
  wikiStats,
} from '../data/wiki-overview'
import { MermaidDiagram } from './MermaidDiagram'

export function WikiOverview() {
  return (
    <div className="space-y-8">
      {/* 上方统计带 */}
      <section className="rounded-xl border border-hairline-soft border-l-2 border-l-ink bg-canvas p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <Compass className="h-4 w-4 text-ink" aria-hidden />
          全景定位
        </div>
        <p className="mt-2 text-base leading-relaxed text-ink">
          以「<strong className="font-semibold">C 端业务矩阵 + B 端业务矩阵</strong>」为左右两翼，「<strong className="font-semibold">品牌工程化 + 营销工程化</strong>」为双引擎，「
          <strong className="font-semibold">品牌矩阵 1.6 + 规范权重决策表</strong>」为规则中枢，串联成 UED 设计中心的全景脑图。
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-5">
          <Stat label="一级模块" value={wikiStats.topLevel} suffix="个" />
          <Stat label="叶节点估计" value={wikiStats.leafEstimate} suffix="项" />
          <Stat label="C 端 App" value={wikiStats.cEnd} suffix="个" accent />
          <Stat label="B 端业务" value={wikiStats.bEnd} suffix="个" />
          <Stat label="工程化引擎" value={wikiStats.engines} suffix="套" />
        </dl>
      </section>

      {/* 主脑图 */}
      <section className="space-y-3">
        <header className="flex items-center gap-3">
          <Network className="h-5 w-5 text-ink" aria-hidden />
          <h3 className="text-base font-semibold text-ink">UED 全景 Mindmap</h3>
          <span className="section-rule" aria-hidden />
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
            Wiki Atlas
          </span>
        </header>

        <div className="overflow-x-auto rounded-xl border border-hairline bg-canvas p-4 sm:p-6">
          <div className="min-w-[720px]">
            <MermaidDiagram chart={wikiMindmap} />
          </div>
        </div>

        <p className="text-xs text-muted">
          脑图为纯目录可视化 · 节点不可点击 · 详细字段请切换到「品牌矩阵心智规范」「规范权重决策表」或两套工程化 Tab。
        </p>
      </section>

      {/* 一级模块清单 */}
      <section className="space-y-3">
        <header className="flex items-center gap-3">
          <ListTree className="h-5 w-5 text-ink" aria-hidden />
          <h3 className="text-base font-semibold text-ink">一级模块清单</h3>
          <span className="section-rule" aria-hidden />
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
            {wikiBranches.length} branches
          </span>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {wikiBranches.map((b) => {
            const meta = wikiCategoryMeta[b.category]
            return (
              <article
                key={b.id}
                className="rounded-xl border border-hairline-soft bg-canvas p-4 transition-colors hover:border-hairline"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Layers className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                    <p className="truncate font-semibold text-ink">{b.label}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${meta.chipClass}`}
                  >
                    {meta.label}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">{b.hint}</p>
                <p className="mt-2 font-mono text-[10px] text-muted-soft">
                  ≈ {b.children} 子项
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function Stat({
  label,
  value,
  suffix,
  accent,
}: {
  label: string
  value: number
  suffix?: string
  accent?: boolean
}) {
  return (
    <div className="rounded-lg border border-hairline-soft bg-surface-soft px-3 py-2">
      <dt className="text-[10px] font-medium uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-0.5 flex items-baseline gap-1">
        <span
          className={`text-xl font-semibold ${accent ? 'text-rausch' : 'text-ink'}`}
        >
          {value}
        </span>
        {suffix ? (
          <span className="text-xs text-muted">{suffix}</span>
        ) : null}
      </dd>
    </div>
  )
}
