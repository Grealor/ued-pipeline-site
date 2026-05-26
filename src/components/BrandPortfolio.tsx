import { ChevronDown, Layers3 } from 'lucide-react'
import { useState } from 'react'
import { subBrands, subBrandFields, type SubBrand } from '../data/brand-portfolio'

export function BrandPortfolio() {
  const [expandedId, setExpandedId] = useState<string | null>(subBrands[0]?.id ?? null)

  return (
    <div className="space-y-8">
      {/* 矩阵概览 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <Layers3 className="h-4 w-4 text-slate-500" aria-hidden />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            矩阵概览
          </h3>
          <div className="section-rule" />
          <span className="font-mono text-[10px] text-slate-500">
            {subBrands.length} brands · 可扩展
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {subBrands.map((b) => {
            const Icon = b.icon
            const active = expandedId === b.id
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setExpandedId(b.id)}
                className={`group rounded-xl border bg-white p-4 text-left shadow-sm transition-colors ${
                  active
                    ? 'border-slate-300 bg-slate-50'
                    : 'border-slate-200/60 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-slate-50">
                    <Icon className="h-4 w-4 text-slate-800" aria-hidden />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">{b.code}</span>
                </div>
                <p className="mt-3 font-semibold text-slate-900">{b.name}</p>
                <p className="text-[11px] text-slate-500">{b.enName}</p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                  {b.tagline}
                </p>
              </button>
            )
          })}

          {/* 扩展占位 */}
          <div className="flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-4 text-center text-xs text-slate-500">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider">+ Future</p>
              <p className="mt-1">如 C 端补充未覆盖子品牌<br />直接追加于本节点</p>
            </div>
          </div>
        </div>
      </section>

      {/* 二级规范详情手风琴 */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            二级规范详情
          </h3>
          <div className="section-rule" />
        </div>

        <div className="space-y-3">
          {subBrands.map((b) => (
            <SubBrandCard
              key={b.id}
              brand={b}
              expanded={expandedId === b.id}
              onToggle={() => setExpandedId(expandedId === b.id ? null : b.id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

type SubBrandCardProps = {
  brand: SubBrand
  expanded: boolean
  onToggle: () => void
}

function SubBrandCard({ brand, expanded, onToggle }: SubBrandCardProps) {
  const Icon = brand.icon

  return (
    <article
      id={`subbrand-${brand.id}`}
      className="rounded-xl border border-slate-200/60 bg-white shadow-sm transition-colors hover:border-slate-300"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-slate-50"
        aria-expanded={expanded}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
          <Icon className="h-5 w-5 text-slate-800" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-xs text-slate-500">{brand.code}</span>
            <p className="font-semibold text-slate-900">{brand.name}</p>
            <p className="text-xs text-slate-500">{brand.enName}</p>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">{brand.tagline}</p>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {expanded && (
        <div className="space-y-3 border-t border-slate-200 p-4">
          {subBrandFields.map((field) => {
            const value = brand.fields[field.key]
            return (
              <div
                key={field.key}
                className="rounded-lg border border-slate-200/60 bg-slate-50 px-4 py-3"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-xs font-semibold text-slate-900">{field.label}</p>
                  <p className="font-mono text-[10px] text-slate-500">{field.hint}</p>
                </div>
                <div className="mt-2 text-xs leading-relaxed text-slate-700">
                  {Array.isArray(value) ? (
                    <ul className="flex flex-wrap gap-1.5">
                      {value.map((item) => (
                        <li
                          key={item}
                          className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </article>
  )
}
