import {
  Anchor,
  ClipboardList,
  Combine,
  Copy,
  Cpu,
  Crop,
  Database,
  GitBranch,
  Image as ImageIcon,
  Languages,
  LayoutGrid,
  LayoutTemplate,
  Layers,
  Palette,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Type,
  type LucideIcon,
} from 'lucide-react'
import { MermaidDiagram } from './MermaidDiagram'
import {
  assetCategories,
  pipelineStages,
  posterPipelineMermaid,
  posterSpecYaml,
  specSections,
  type SpecField,
} from '../data/poster-pipeline'

const iconMap: Record<string, LucideIcon> = {
  Anchor,
  Crop,
  ClipboardList,
  Combine,
  Copy,
  Cpu,
  Database,
  GitBranch,
  Image: ImageIcon,
  Languages,
  LayoutGrid,
  LayoutTemplate,
  Layers,
  Palette,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Type,
}

function Icon({ keyName, className }: { keyName: string; className?: string }) {
  const Cmp = iconMap[keyName] ?? Sparkles
  return <Cmp className={className} aria-hidden />
}

export function PosterPipeline() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-xl border border-hairline-soft border-l-2 border-l-rausch bg-canvas p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <Sparkles className="h-4 w-4 text-rausch" aria-hidden />
          为什么需要 Spec 化
        </div>
        <p className="mt-2 text-base leading-relaxed text-ink">
          原 brief「参考图1做三张校招海报，年轻朝气，参考图2/3 的角色设定」存在三个工程化问题：
          <strong className="font-semibold"> ①</strong> 字段隐式 —— 尺寸 / 渠道 / 焦点词 / IP 一致性
          锁全部凭生图模型默认猜测；
          <strong className="font-semibold"> ②</strong> 不可控 —— 多次生成系列风格漂移；
          <strong className="font-semibold"> ③</strong> 不可仲裁 —— 出问题没办法定位是哪一段输入或哪一阶段。
          下面是把它重构成 <strong className="font-semibold text-ink">9 段 Spec × 8 阶段管线 × 2 道防线</strong>{' '}
          的方法。
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <Stat label="Spec 段落" value={specSections.length} suffix="段" />
          <Stat label="管线阶段" value={pipelineStages.length} suffix="阶段" />
          <Stat label="审核防线" value={2} suffix="道" accent />
          <Stat label="资产中台分类" value={assetCategories.length} suffix="类" />
        </dl>
      </section>

      {/* Pipeline diagram */}
      <section className="space-y-3">
        <SectionHead
          icon="GitBranch"
          label="工程化管线"
          english="Brand Asset → Poster Pipeline"
          tag="Pipeline"
        />
        <div className="overflow-x-auto rounded-xl border border-hairline bg-canvas p-4 sm:p-6">
          <MermaidDiagram chart={posterPipelineMermaid} />
        </div>
        <p className="text-xs text-muted">
          中台资产以虚线引入 Stage 2/4/5/6 · 实线为主链路 · 两道菱形为 P0/P1 防线
        </p>
      </section>

      {/* Structured Spec */}
      <section className="space-y-4">
        <SectionHead
          icon="ClipboardList"
          label="结构化 Spec（校招海报案例填充）"
          english="9 字段段落 · 每段都可被独立校验"
          tag="Spec Schema"
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {specSections.map((sec) => (
            <article
              key={sec.id}
              className="rounded-xl border border-hairline-soft bg-canvas p-4"
            >
              <header className="flex items-center gap-2">
                <Icon keyName={sec.iconKey} className="h-4 w-4 text-ink" />
                <h4 className="text-sm font-semibold text-ink">{sec.label}</h4>
                <span className="font-mono text-[10px] text-muted">{sec.english}</span>
              </header>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">{sec.description}</p>
              <dl className="mt-3 space-y-2">
                {sec.fields.map((f) => (
                  <FieldRow key={f.key} field={f} />
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* Stage cards */}
      <section className="space-y-4">
        <SectionHead
          icon="Layers"
          label="8 阶段流水线"
          english="Each stage has input / output / tools / failure modes"
          tag="Stages"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {pipelineStages.map((s) => (
            <article
              key={s.id}
              className="rounded-xl border border-hairline-soft bg-canvas p-4"
            >
              <header className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-hairline bg-surface-soft font-mono text-xs text-ink">
                  {s.index}
                </span>
                <Icon keyName={s.iconKey} className="h-4 w-4 text-ink" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{s.label}</p>
                  <p className="truncate text-[11px] text-muted">{s.english}</p>
                </div>
                <span className="font-mono text-[10px] text-muted">{s.duration}</span>
              </header>
              <dl className="mt-3 grid grid-cols-[60px_1fr] gap-x-3 gap-y-1 text-[11px] leading-relaxed">
                <dt className="text-muted">IN</dt>
                <dd className="text-body">{s.inputs}</dd>
                <dt className="text-muted">OUT</dt>
                <dd className="text-body">{s.outputs}</dd>
                <dt className="text-muted">TOOLS</dt>
                <dd className="font-mono text-body">{s.tools}</dd>
                <dt className="text-muted">FAILS</dt>
                <dd className="text-body">
                  {s.failurePatterns.map((fp, i) => (
                    <span key={i} className="block">
                      · {fp}
                    </span>
                  ))}
                </dd>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* Asset Hub */}
      <section className="space-y-4">
        <SectionHead
          icon="Database"
          label="品牌资产中台"
          english="The single source of truth · resolved at Stage 2"
          tag="Asset Hub"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {assetCategories.map((a) => (
            <article
              key={a.id}
              className="rounded-xl border border-hairline-soft bg-canvas p-4"
            >
              <header className="flex items-center gap-2">
                <Icon keyName={a.iconKey} className="h-4 w-4 text-ink" />
                <h4 className="text-sm font-semibold text-ink">{a.label}</h4>
              </header>
              <p className="mt-1 font-mono text-[10px] text-muted">{a.schema}</p>
              <ul className="mt-2 space-y-1">
                {a.items.map((it) => (
                  <li key={it} className="text-[11px] text-body">
                    · {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Full YAML */}
      <section className="space-y-3">
        <SectionHead
          icon="Type"
          label="完整 Spec YAML（可直接喂给生图 agent）"
          english="Copy-paste ready"
          tag="Ready"
        />
        <pre className="overflow-x-auto rounded-xl border border-hairline bg-surface-soft p-4 font-mono text-[11px] leading-relaxed text-ink">
          <code>{posterSpecYaml}</code>
        </pre>
      </section>
    </div>
  )
}

function FieldRow({ field }: { field: SpecField }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-x-3 text-[11px] leading-relaxed">
      <dt className="font-mono text-muted">{field.key}</dt>
      <dd className="text-body whitespace-pre-line">
        {field.example}
        {field.comment ? (
          <span className="mt-0.5 block text-[10px] italic text-muted">↳ {field.comment}</span>
        ) : null}
      </dd>
    </div>
  )
}

function SectionHead({
  icon,
  label,
  english,
  tag,
}: {
  icon: string
  label: string
  english: string
  tag: string
}) {
  return (
    <header className="flex items-center gap-3">
      <Icon keyName={icon} className="h-5 w-5 text-ink" />
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-ink">{label}</h3>
        <p className="font-mono text-[10px] text-muted">{english}</p>
      </div>
      <span className="section-rule" aria-hidden />
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{tag}</span>
    </header>
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
        <span className={`text-xl font-semibold ${accent ? 'text-rausch' : 'text-ink'}`}>
          {value}
        </span>
        {suffix ? <span className="text-xs text-muted">{suffix}</span> : null}
      </dd>
    </div>
  )
}
