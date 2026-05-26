import { ArrowDown, Shield, ShieldCheck } from 'lucide-react'
import type { EngineeringPlan } from '../data/plan-types'
import {
  brandPipelineMermaid,
  marketingPipelineMermaid,
} from '../data/pipeline-diagrams'
import { MermaidDiagram } from './MermaidDiagram'

type PipelineSidebarProps = {
  plan: EngineeringPlan
}

export function PipelineSidebar({ plan }: PipelineSidebarProps) {
  const mermaidChart =
    plan.id === 'brand' ? brandPipelineMermaid : marketingPipelineMermaid

  return (
    <aside className="flex h-full flex-col gap-5">
      <div className="shrink-0 border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          横向落地 · Pipeline
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-900">
          工业级全链路闭环
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          两道审核防线贯穿生成与交付
        </p>
      </div>

      {/* 流式阶段卡片 */}
      <div className="space-y-0">
        <div className="rounded-lg border border-slate-200/60 bg-slate-50 px-4 py-3 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Input
          </p>
          <p className="mt-0.5 text-xs font-medium text-slate-900">
            {plan.id === 'brand' ? '品牌需求 / Prompt' : '营销需求 / 商品图'}
          </p>
        </div>

        {plan.pipelineStages.map((stage, index) => {
          const Icon = stage.icon
          const gateAfter = plan.auditGates[index]

          return (
            <div key={stage.id}>
              <div className="flex justify-center py-1" aria-hidden>
                <ArrowDown className="h-4 w-4 text-slate-300" strokeWidth={1.5} />
              </div>

              <article className="rounded-lg border border-slate-200/60 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50">
                    <Icon className="h-4 w-4 text-slate-800" aria-hidden />
                  </div>
                  <h3 className="text-xs font-semibold leading-snug text-slate-900">
                    {stage.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {stage.items.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-md border border-slate-200/60 bg-slate-50 px-3 py-2"
                    >
                      <p className="text-[11px] font-medium text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>

              {gateAfter && (
                <>
                  <div className="flex justify-center py-1" aria-hidden>
                    <ArrowDown className="h-4 w-4 text-slate-300" strokeWidth={1.5} />
                  </div>
                  <article className="rounded-lg border border-slate-200/60 border-l-2 border-l-amber-500 bg-amber-50/50 p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-slate-800" aria-hidden />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                          审核防线 {index + 1}
                        </p>
                        <h3 className="text-xs font-semibold text-slate-900">
                          {gateAfter.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-2 text-[10px] text-slate-600">{gateAfter.description}</p>
                    <ul className="mt-2 flex flex-wrap gap-1">
                      {gateAfter.checks.map((check) => (
                        <li
                          key={check}
                          className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-600"
                        >
                          {check}
                        </li>
                      ))}
                    </ul>
                  </article>
                </>
              )}
            </div>
          )
        })}

        <div className="flex justify-center py-1" aria-hidden>
          <ArrowDown className="h-4 w-4 text-slate-300" strokeWidth={1.5} />
        </div>
        <div className="rounded-lg border border-slate-200/60 border-l-2 border-l-slate-800 bg-white p-4 text-center shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Output
          </p>
          <p className="mt-0.5 text-sm font-semibold text-slate-900">
            {plan.id === 'brand' ? '品牌 KV / 4K 交付' : '全渠道 Banner 矩阵'}
          </p>
        </div>
      </div>

      {/* Mermaid 总览 */}
      <section className="mt-auto rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-3">
          <Shield className="h-4 w-4 text-slate-500" aria-hidden />
          <p className="text-xs font-medium text-slate-600">流水线拓扑图</p>
        </div>
        <MermaidDiagram chart={mermaidChart} theme="neutral" />
      </section>
    </aside>
  )
}
