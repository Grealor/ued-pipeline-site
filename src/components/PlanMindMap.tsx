import { ChevronDown, Crosshair, Goal } from 'lucide-react'
import { useState } from 'react'
import type { EngineeringPlan } from '../data/plan-types'

type PlanMindMapProps = {
  plan: EngineeringPlan
}

export function PlanMindMap({ plan }: PlanMindMapProps) {
  const [expandedLayers, setExpandedLayers] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(plan.layers.map((l) => [l.id, true])),
  )

  const toggleLayer = (id: string) => {
    setExpandedLayers((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="space-y-8">
      {/* 核心目标 */}
      <section className="rounded-xl border border-slate-200/60 border-l-2 border-l-slate-800 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
            <Goal className="h-5 w-5 text-slate-800" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
              核心目标
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-900">{plan.goal}</p>
          </div>
        </div>
      </section>

      {/* 纵向蒸馏：Skill 解构 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <Crosshair className="h-4 w-4 text-slate-500" aria-hidden />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            纵向蒸馏 · Skill 解构
          </h3>
          <div className="section-rule" />
        </div>

        <div className="relative space-y-3 pl-6">
          <div
            className="absolute bottom-4 left-[11px] top-4 w-px bg-slate-200"
            aria-hidden
          />

          {plan.layers.map((layer, index) => {
            const Icon = layer.icon
            const open = expandedLayers[layer.id] ?? true

            return (
              <article
                key={layer.id}
                className="relative rounded-xl border border-slate-200/60 bg-white shadow-sm transition-colors hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleLayer(layer.id)}
                  className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-slate-50"
                  aria-expanded={open}
                >
                  <span className="absolute -left-6 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-bold text-slate-600">
                    {index + 1}
                  </span>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                    <Icon className="h-5 w-5 text-slate-800" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-500">{layer.label}</p>
                    <p className="font-semibold text-slate-900">{layer.title}</p>
                    <p className="text-xs text-slate-500">{layer.subtitle}</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>

                {open && (
                  <ul className="space-y-2 border-t border-slate-200 px-4 pb-4 pt-2">
                    {layer.items.map((item) => (
                      <li
                        key={item.title}
                        className="rounded-lg border border-slate-200/60 bg-slate-50 px-4 py-3"
                      >
                        <p className="text-sm font-medium text-slate-900">{item.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </section>

      {/* 执行里程碑 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            执行里程碑
          </h3>
          <div className="section-rule" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plan.milestones.map((ms) => {
            const Icon = ms.icon
            return (
              <article
                key={ms.id}
                className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-bold text-slate-900">
                    {ms.phase}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    {ms.period}
                  </span>
                </div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                  <Icon className="h-5 w-5 text-slate-800" aria-hidden />
                </div>
                <h4 className="font-semibold text-slate-900">{ms.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {ms.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
