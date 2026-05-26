import {
  Bot,
  Boxes,
  Cpu,
  Layers,
  Megaphone,
  Network,
  Radio,
  Scale,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import {
  BrandPortfolio,
  BrandPortfolioSidebar,
  PipelineSidebar,
  PlanMindMap,
  RulesPriority,
  RulesPrioritySidebar,
  WikiOverview,
  WikiOverviewSidebar,
} from './components'
import { brandPlan } from './data/brand-plan'
import { marketingPlan } from './data/marketing-plan'
import type { EngineeringPlan } from './data/plan-types'

type TabId = 'brand' | 'marketing' | 'portfolio' | 'rules' | 'overview'

type TabDef = {
  id: TabId
  label: string
  engine: string
  icon: LucideIcon
}

const tabs: TabDef[] = [
  {
    id: 'brand',
    label: '品牌设计工程化',
    engine: 'Brand AI Engine',
    icon: Layers,
  },
  {
    id: 'marketing',
    label: '营销设计工程化',
    engine: 'Marketing Automation',
    icon: Megaphone,
  },
  {
    id: 'portfolio',
    label: '品牌矩阵心智规范',
    engine: 'Brand Portfolio · 1.6',
    icon: Boxes,
  },
  {
    id: 'rules',
    label: '规范权重决策表',
    engine: 'Rules Priority · 03',
    icon: Scale,
  },
  {
    id: 'overview',
    label: 'UED 全景脑图',
    engine: 'Wiki Atlas · Mindmap',
    icon: Network,
  },
]

const plans: Record<'brand' | 'marketing', EngineeringPlan> = {
  brand: brandPlan,
  marketing: marketingPlan,
}

const tabHeading: Record<TabId, { kicker: string; title: string; subtitle: string; desc: string }> = {
  brand: {
    kicker: '执行脑图',
    title: brandPlan.tabLabel,
    subtitle: brandPlan.engineName,
    desc: '纵向 Skill 解构 × 横向 Pipeline 落地 · 里程碑驱动交付',
  },
  marketing: {
    kicker: '执行脑图',
    title: marketingPlan.tabLabel,
    subtitle: marketingPlan.engineName,
    desc: '纵向 Skill 解构 × 横向 Pipeline 落地 · 里程碑驱动交付',
  },
  portfolio: {
    kicker: '规范矩阵',
    title: '品牌矩阵心智规范',
    subtitle: 'Brand Portfolio · 1.6',
    desc: '7 个子品牌 · 统一二级模板（定位 / 视觉 / IP / 关系 / 场景 / 资产）',
  },
  rules: {
    kicker: '跨类仲裁',
    title: '规范权重决策表',
    subtitle: 'Rules Priority · rules-priority.md',
    desc: '三层规范 × 4 条仲裁原则 × 7 场景 × 6 维度 · AI 与审核统一消费',
  },
  overview: {
    kicker: '全景脑图',
    title: 'UED 设计中心 · 全景脑图',
    subtitle: 'Wiki Atlas · C 端 + B 端 + 工程化 + 规范',
    desc: 'C 端 7 个核心 App × B 端业务矩阵 × 双工程化引擎 × 全规范体系 · 一图见 UED 全貌',
  },
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('brand')
  const heading = tabHeading[activeTab]

  return (
    <div className="min-h-svh bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-rausch">
              <Cpu className="h-5 w-5 text-canvas" aria-hidden />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                UED · Design Engineering
              </p>
              <h1 className="text-base font-semibold text-ink sm:text-lg">
                品牌与营销设计AI工程化看板
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-8 sm:flex">
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-rausch" aria-hidden />
              <span>Pipeline</span>
              <span className="font-mono font-medium text-ink">ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <Radio className="h-3.5 w-3.5 text-ink" aria-hidden />
              <span>四视图</span>
              <span className="text-muted">Brand · Marketing · Portfolio · Rules</span>
            </div>
          </div>
        </div>
      </header>

      {/* 主布局 */}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6">
        {/* 左侧主栏 */}
        <main className="min-w-0 flex-1">
          {/* Tab 切换 */}
          <div
            className="panel-card mb-6 grid grid-cols-1 gap-1 p-1 sm:grid-cols-2 xl:grid-cols-5"
            role="tablist"
            aria-label="工程化与规范视图切换"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                    active
                      ? 'border border-slate-200 bg-slate-100'
                      : 'border border-transparent text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                      active
                        ? 'border-slate-300 bg-white'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${active ? 'text-slate-900' : 'text-slate-500'}`}
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`truncate text-sm font-semibold ${active ? 'text-slate-900' : 'text-slate-700'}`}
                    >
                      {tab.label}
                    </p>
                    <p className="truncate text-[11px] text-slate-500">{tab.engine}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* 主内容区 */}
          <div className="panel-card rounded-2xl p-5 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">
                  <Bot className="h-3 w-3 text-slate-800" aria-hidden />
                  {heading.kicker}
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {heading.title}
                </h2>
                <p className="mt-1 font-mono text-xs text-slate-600">{heading.subtitle}</p>
              </div>
              <p className="max-w-md text-right text-xs text-slate-500">{heading.desc}</p>
            </div>

            {activeTab === 'brand' && <PlanMindMap plan={plans.brand} />}
            {activeTab === 'marketing' && <PlanMindMap plan={plans.marketing} />}
            {activeTab === 'portfolio' && <BrandPortfolio />}
            {activeTab === 'rules' && <RulesPriority />}
            {activeTab === 'overview' && <WikiOverview />}
          </div>
        </main>

        {/* 右侧侧边栏（按 Tab 切换） */}
        <div className="w-full shrink-0 lg:w-[380px] xl:w-[420px]">
          <div className="panel-card sticky top-24 max-h-[calc(100svh-7rem)] overflow-y-auto rounded-2xl p-5 sm:p-6">
            {activeTab === 'brand' && <PipelineSidebar plan={plans.brand} />}
            {activeTab === 'marketing' && <PipelineSidebar plan={plans.marketing} />}
            {activeTab === 'portfolio' && <BrandPortfolioSidebar />}
            {activeTab === 'rules' && <RulesPrioritySidebar />}
            {activeTab === 'overview' && <WikiOverviewSidebar />}
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        UED 品牌与营销设计工程化 · {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
