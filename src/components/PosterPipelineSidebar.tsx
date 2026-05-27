import { AlertTriangle, GitMerge, Sparkles, Workflow } from 'lucide-react'
import { pipelineStages, specSections } from '../data/poster-pipeline'

export function PosterPipelineSidebar() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          Poster Pipeline
        </p>
        <h2 className="mt-1 text-lg font-semibold text-ink">海报 AI 工程化</h2>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          把"参考图做几张海报"的口头需求，工程化为<strong className="font-medium text-ink">
            可校验 · 可仲裁 · 可复现
          </strong>
          的 Spec + Pipeline。
        </p>
      </header>

      {/* 与营销工程化的关系 */}
      <section className="rounded-xl border border-hairline-soft border-l-2 border-l-ink bg-canvas p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <GitMerge className="h-3.5 w-3.5 text-ink" aria-hidden />
          关系定位
        </div>
        <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-body">
          <li>
            ⇢ 它是 <strong className="font-medium text-ink">营销设计工程化</strong>
            引擎的一个具体实例 · 复用其双道防线
          </li>
          <li>
            ⇢ 资产消费 <strong className="font-medium text-ink">品牌矩阵心智规范 1.6</strong>{' '}
            的子品牌 IP / 色 / KV
          </li>
          <li>
            ⇢ 字段冲突走 <strong className="font-medium text-ink">规范权重决策表</strong> 仲裁
          </li>
        </ul>
      </section>

      {/* 输入清单 */}
      <section>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <Workflow className="h-3.5 w-3.5 text-ink" aria-hidden />
          输入 9 段
        </div>
        <ol className="mt-2 space-y-1.5 text-xs leading-relaxed text-body">
          {specSections.map((s, i) => (
            <li key={s.id} className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-hairline bg-surface-soft font-mono text-[9px] text-muted">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-ink">{s.label}</p>
                <p className="font-mono text-[10px] text-muted-soft">{s.english}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 阶段时长概览 */}
      <section className="rounded-xl border border-hairline-soft bg-canvas p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <Sparkles className="h-3.5 w-3.5 text-rausch" aria-hidden />
          单张海报端到端
        </div>
        <ul className="mt-2 space-y-1 text-[11px] leading-relaxed text-body">
          {pipelineStages.map((s) => (
            <li key={s.id} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 min-w-0">
                <span className="font-mono text-muted-soft">S{s.index}</span>
                <span className="truncate text-ink">{s.label}</span>
              </span>
              <span className="font-mono text-[10px] text-muted">{s.duration}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[10px] text-muted">
          单张端到端 ≈ <strong className="font-medium text-ink">90 – 180s</strong> ·
          系列 3 张 ≈ 4 – 8 分钟
        </p>
      </section>

      {/* 常见失败 */}
      <section className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-amber-900">
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
          高频失败模式
        </div>
        <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-amber-900">
          <li>
            <strong className="font-semibold">①</strong> Brief Parser 字段未澄清就开渲 → P0 报错
          </li>
          <li>
            <strong className="font-semibold">②</strong> IP-Adapter weight 太低 →
            三张系列角色长相漂移
          </li>
          <li>
            <strong className="font-semibold">③</strong> Compositor 没用品牌字体 → 文字调性走样
          </li>
          <li>
            <strong className="font-semibold">④</strong> Channel Adapter 暴力裁切 → 焦点文案被切掉
          </li>
        </ul>
      </section>
    </div>
  )
}
