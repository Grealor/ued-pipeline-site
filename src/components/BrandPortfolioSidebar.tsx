import { ArrowRight, Info, Network } from 'lucide-react'
import { subBrands } from '../data/brand-portfolio'

export function BrandPortfolioSidebar() {
  return (
    <aside className="flex h-full flex-col gap-5">
      <div className="shrink-0 border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          1.6 · Brand Portfolio
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">品牌矩阵索引</h2>
        <p className="mt-1 text-xs text-slate-500">
          7 个子品牌 + 可扩展位 · 与主站 16.0 强关联
        </p>
      </div>

      {/* 矩阵索引 */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <Network className="h-4 w-4 text-slate-500" aria-hidden />
          <p className="text-xs font-medium text-slate-600">矩阵速览</p>
        </div>
        <ul className="space-y-1.5">
          {subBrands.map((b) => {
            const Icon = b.icon
            return (
              <li key={b.id}>
                <a
                  href={`#subbrand-${b.id}`}
                  className="group flex items-center gap-3 rounded-md border border-slate-200/60 bg-white px-3 py-2 text-left text-xs transition-colors hover:bg-slate-50"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-slate-700" aria-hidden />
                  <span className="font-mono text-[10px] text-slate-500">{b.code}</span>
                  <span className="min-w-0 flex-1 truncate font-medium text-slate-900">
                    {b.name}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      {/* 与主品牌的关系 */}
      <section className="rounded-xl border border-slate-200/60 border-l-2 border-l-slate-800 bg-white p-4 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
          与主站 16.0 的关系
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-700">
          每个子品牌沿用统一二级模板的 <strong>d 字段</strong>明确"继承 / 差异 / 底线"。
          冲突时由 <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[10px]">rules-priority.md</code> 仲裁。
        </p>
      </section>

      {/* C 端 vs 品牌矩阵差异说明 */}
      <section className="mt-auto rounded-xl border border-slate-200/60 border-l-2 border-l-amber-500 bg-amber-50/50 p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-slate-700" aria-hidden />
          <p className="text-xs font-semibold text-slate-900">范围差异说明</p>
        </div>
        <ul className="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-700">
          <li>· C 端 APP 矩阵化体系：覆盖 5 个</li>
          <li>· 品牌矩阵心智规范：覆盖 7 个</li>
          <li>· 后续若 C 端补充其它子品牌，<strong>直接在 1.6 下追加节点</strong></li>
        </ul>
      </section>
    </aside>
  )
}
