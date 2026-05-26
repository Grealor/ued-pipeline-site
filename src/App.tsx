import {
  Activity,
  Bot,
  Cpu,
  Layers,
  Megaphone,
  Radio,
} from 'lucide-react'
import { useState } from 'react'
import { PlanMindMap, PipelineSidebar } from './components'
import { brandPlan } from './data/brand-plan'
import { marketingPlan } from './data/marketing-plan'
import type { EngineeringPlan } from './data/plan-types'

type TabId = 'brand' | 'marketing'

const tabs: {
  id: TabId
  label: string
  engine: string
  icon: typeof Layers
}[] = [
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
]

const plans: Record<TabId, EngineeringPlan> = {
  brand: brandPlan,
  marketing: marketingPlan,
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('brand')
  const plan = plans[activeTab]

  return (
    <div className="min-h-svh bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
              <Cpu className="h-5 w-5 text-slate-800" aria-hidden />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                UED · Design Engineering
              </p>
              <h1 className="text-base font-semibold text-slate-900 sm:text-lg">
                品牌与营销设计AI工程化看板
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-8 sm:flex">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Activity className="h-3.5 w-3.5 text-slate-800" aria-hidden />
              <span>Pipeline</span>
              <span className="font-mono font-medium text-slate-900">ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Radio className="h-3.5 w-3.5 text-slate-800" aria-hidden />
              <span>双引擎</span>
              <span className="text-slate-500">Brand · Marketing</span>
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
            className="panel-card mb-6 flex flex-col gap-1 p-1 sm:flex-row"
            role="tablist"
            aria-label="工程化规划切换"
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
                  className={`flex flex-1 items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
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

          {/* 脑图主内容区 */}
          <div className="panel-card rounded-2xl p-5 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">
                  <Bot className="h-3 w-3 text-slate-800" aria-hidden />
                  执行脑图
                </div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {plan.tabLabel}
                </h2>
                <p className="mt-1 font-mono text-xs text-slate-600">{plan.engineName}</p>
              </div>
              <p className="max-w-md text-right text-xs text-slate-500">
                纵向 Skill 解构 × 横向 Pipeline 落地 · 里程碑驱动交付
              </p>
            </div>

            <PlanMindMap plan={plan} />
          </div>
        </main>

        {/* 右侧 Pipeline 侧边栏 */}
        <div className="w-full shrink-0 lg:w-[380px] xl:w-[420px]">
          <div className="panel-card sticky top-24 max-h-[calc(100svh-7rem)] overflow-y-auto rounded-2xl p-5 sm:p-6">
            <PipelineSidebar plan={plan} />
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
