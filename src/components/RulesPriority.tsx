import { GitBranch, Scale, ShieldCheck } from 'lucide-react'
import {
  aiConsumers,
  arbitrationPrinciples,
  dimensions,
  priorityMeta,
  ruleLayers,
  scenarios,
  type RulePriority,
} from '../data/rules-priority'

function PriorityChip({
  priority,
  className = '',
}: {
  priority: RulePriority
  className?: string
}) {
  const meta = priorityMeta[priority]
  return (
    <span
      title={meta.full}
      className={`inline-flex items-center justify-center rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium ${meta.chipClass} ${className}`}
    >
      {meta.label}
    </span>
  )
}

export function RulesPriority() {
  return (
    <div className="space-y-8">
      {/* 三层规范定义 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <ShieldCheck className="h-4 w-4 text-slate-500" aria-hidden />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            三层规范定义
          </h3>
          <div className="section-rule" />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {ruleLayers.map((layer) => (
            <article
              key={layer.id}
              className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2">
                <PriorityChip priority={layer.priorityChip} />
                <p className="font-semibold text-slate-900">{layer.label}</p>
              </div>
              <p className="font-mono text-[10px] text-slate-500">{layer.fullName}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{layer.role}</p>
              <ul className="mt-3 flex flex-wrap gap-1">
                {layer.examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-700"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 仲裁原则 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <Scale className="h-4 w-4 text-slate-500" aria-hidden />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            仲裁原则
          </h3>
          <div className="section-rule" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {arbitrationPrinciples.map((p) => (
            <article
              key={p.code}
              className="rounded-xl border border-slate-200/60 border-l-2 border-l-slate-800 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-slate-500">
                  {p.code}
                </span>
                <p className="font-semibold text-slate-900">{p.title}</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 场景化权重矩阵 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <GitBranch className="h-4 w-4 text-slate-500" aria-hidden />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            场景化权重矩阵
          </h3>
          <div className="section-rule" />
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200/60 bg-white shadow-sm">
          <table className="min-w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th
                  scope="col"
                  className="sticky left-0 z-10 min-w-[200px] border-r border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700"
                >
                  场景
                </th>
                {dimensions.map((dim) => {
                  const Icon = dim.icon
                  return (
                    <th
                      key={dim.id}
                      scope="col"
                      className="px-3 py-3 text-center text-xs font-semibold text-slate-700"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Icon className="h-3.5 w-3.5 text-slate-500" aria-hidden />
                        <span>{dim.name}</span>
                        <span className="font-mono text-[9px] font-normal text-slate-400">
                          {dim.short}
                        </span>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {scenarios.map((sc) => (
                <tr
                  key={sc.id}
                  className="border-b border-slate-200/60 last:border-b-0 hover:bg-slate-50"
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 border-r border-slate-200/60 bg-white px-4 py-3 align-top text-left"
                  >
                    <p className="font-semibold text-slate-900">{sc.name}</p>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">
                      {sc.description}
                    </p>
                  </th>
                  {dimensions.map((dim) => (
                    <td key={dim.id} className="px-2 py-3 text-center align-middle">
                      <PriorityChip priority={sc.priorities[dim.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 图例 */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-slate-600">
          <span className="font-medium text-slate-500">图例:</span>
          {(Object.keys(priorityMeta) as RulePriority[]).map((key) => (
            <span key={key} className="inline-flex items-center gap-1.5">
              <PriorityChip priority={key} />
              <span>{priorityMeta[key].full}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 场景注释 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            场景注释
          </h3>
          <div className="section-rule" />
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          {scenarios.map((sc) => (
            <article
              key={sc.id}
              className="rounded-lg border border-slate-200/60 bg-slate-50 px-4 py-3"
            >
              <p className="text-xs font-semibold text-slate-900">{sc.name}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                {sc.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* AI 工程化中的应用 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            AI 工程化中的消费方式
          </h3>
          <div className="section-rule" />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {aiConsumers.map((c) => (
            <article
              key={c.id}
              className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{c.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {c.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
