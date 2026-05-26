import { FileCode, Info, Scale } from 'lucide-react'
import { priorityMeta, ruleLayers, type RulePriority } from '../data/rules-priority'

function MiniChip({ priority }: { priority: RulePriority }) {
  const meta = priorityMeta[priority]
  return (
    <span
      className={`inline-flex items-center justify-center rounded border px-1.5 py-0.5 font-mono text-[9px] font-medium ${meta.chipClass}`}
    >
      {meta.label}
    </span>
  )
}

export function RulesPrioritySidebar() {
  return (
    <aside className="flex h-full flex-col gap-5">
      <div className="shrink-0 border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          03 · Cross-category Rules
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">规范权重决策表</h2>
        <p className="mt-1 text-xs text-slate-500">
          品牌 / 营销 / UI 跨类仲裁的唯一权威源
        </p>
      </div>

      {/* 优先级图例 */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <Scale className="h-4 w-4 text-slate-500" aria-hidden />
          <p className="text-xs font-medium text-slate-600">优先级图例</p>
        </div>
        <ul className="space-y-1.5">
          {(Object.keys(priorityMeta) as RulePriority[]).map((key) => (
            <li
              key={key}
              className="flex items-center gap-2 rounded-md border border-slate-200/60 bg-white px-3 py-2"
            >
              <MiniChip priority={key} />
              <span className="text-[11px] text-slate-700">{priorityMeta[key].full}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 三层定义速览 */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <p className="text-xs font-medium text-slate-600">三层定义</p>
        </div>
        <ul className="space-y-2">
          {ruleLayers.map((layer) => (
            <li
              key={layer.id}
              className="rounded-md border border-slate-200/60 bg-white px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <MiniChip priority={layer.priorityChip} />
                <p className="text-xs font-semibold text-slate-900">{layer.label}</p>
              </div>
              <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                {layer.role}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 权威源 */}
      <section className="rounded-xl border border-slate-200/60 border-l-2 border-l-slate-800 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-slate-700" aria-hidden />
          <p className="text-xs font-semibold text-slate-900">权威源</p>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-700">
          本表最终落地为{' '}
          <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[10px]">
            docs/rules-priority.md
          </code>
          ，被 AI Prompt、审核机器人、模板引擎统一读取。
        </p>
      </section>

      {/* 仲裁链路 */}
      <section className="mt-auto rounded-xl border border-slate-200/60 border-l-2 border-l-amber-500 bg-amber-50/50 p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-slate-700" aria-hidden />
          <p className="text-xs font-semibold text-slate-900">冲突仲裁链路</p>
        </div>
        <ol className="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-700">
          <li>1. 命中品牌红线？ → 终止，使用品牌</li>
          <li>2. 命中场景规则？ → 应用场景规范</li>
          <li>3. 多规范叠加冲突？ → 协商，否则回退主品牌</li>
          <li>4. 都不满足？ → 使用 C 端 UI 默认</li>
        </ol>
      </section>
    </aside>
  )
}
