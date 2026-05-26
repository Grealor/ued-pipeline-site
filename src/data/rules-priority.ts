import {
  Boxes,
  Grid3x3,
  MessageSquare,
  Palette,
  Sparkles,
  Type,
  type LucideIcon,
} from 'lucide-react'

/**
 * 规范层别（仲裁的"主体"）
 */
export type RulePriority =
  | 'brand'        // 品牌规范主导（底线）
  | 'marketing'    // 营销规范主导（场景增强）
  | 'ui'           // C 端 UI 规范主导（默认）
  | 'sub-brand'    // 子品牌规范主导
  | 'blend'        // 多规范叠加 / 协商

export const priorityMeta: Record<
  RulePriority,
  { label: string; full: string; chipClass: string }
> = {
  brand: {
    label: '品牌',
    full: '品牌规范主导（底线）',
    chipClass: 'border-slate-900 bg-slate-900 text-white',
  },
  marketing: {
    label: '营销',
    full: '营销规范主导（场景增强）',
    chipClass: 'border-amber-500 bg-amber-50 text-amber-900',
  },
  ui: {
    label: 'UI',
    full: 'C 端 UI 规范主导（默认）',
    chipClass: 'border-slate-300 bg-slate-50 text-slate-600',
  },
  'sub-brand': {
    label: '子品牌',
    full: '子品牌规范主导',
    chipClass: 'border-slate-400 bg-slate-100 text-slate-800',
  },
  blend: {
    label: '叠加',
    full: '多规范叠加 / 协商',
    chipClass: 'border-dashed border-slate-400 bg-white text-slate-700',
  },
}

/** 设计维度 */
export type Dimension = {
  id: string
  name: string
  short: string
  icon: LucideIcon
  description: string
}

export const dimensions: Dimension[] = [
  {
    id: 'verbal',
    name: '文案',
    short: 'Verbal',
    icon: MessageSquare,
    description: '语气 / 长度 / 大促话术',
  },
  {
    id: 'color',
    name: '色彩',
    short: 'Color',
    icon: Palette,
    description: '主色 / 辅色 / 对比度',
  },
  {
    id: 'motion',
    name: '动效',
    short: 'Motion',
    icon: Sparkles,
    description: '缓动 / 时长 / Lottie',
  },
  {
    id: 'typography',
    name: '字体',
    short: 'Type',
    icon: Type,
    description: '字体家族 / 字号 / 字重',
  },
  {
    id: 'graphic',
    name: '图形',
    short: 'Graphic',
    icon: Boxes,
    description: 'IP / 装饰 / 插画',
  },
  {
    id: 'layout',
    name: '版式',
    short: 'Layout',
    icon: Grid3x3,
    description: '栅格 / 间距 / 圆角',
  },
]

/** 三层规范定义 */
export type RuleLayer = {
  id: 'brand' | 'marketing' | 'ui'
  label: string
  fullName: string
  role: string
  examples: string[]
  priorityChip: RulePriority
}

export const ruleLayers: RuleLayer[] = [
  {
    id: 'brand',
    label: '品牌规范层',
    fullName: 'Brand Layer · 不可破红线',
    role: '品牌资产的最终守护者，跨场景共用',
    examples: ['品牌主色', '超级符号', '字体家族', '主品牌 IP'],
    priorityChip: 'brand',
  },
  {
    id: 'marketing',
    label: '营销规范层',
    fullName: 'Marketing Layer · 场景增强',
    role: '在保留品牌底线的前提下，为大促 / 互动 / 活动场景注入活力',
    examples: ['大促氛围色', '活动话术', '互动玩法元件', '节庆动效'],
    priorityChip: 'marketing',
  },
  {
    id: 'ui',
    label: 'C 端 UI 规范层',
    fullName: 'UI Layer · 跨场景一致性',
    role: '主站 / 详情 / 我的等常规 UI 的默认规则，确保产品体验一致',
    examples: ['组件库', '栅格系统', '交互模式', '基础文案语气'],
    priorityChip: 'ui',
  },
]

/** 仲裁原则 */
export type ArbitrationPrinciple = {
  code: string
  title: string
  detail: string
}

export const arbitrationPrinciples: ArbitrationPrinciple[] = [
  {
    code: 'P1',
    title: '品牌底线不可破',
    detail:
      '品牌规范定义的"红线"项（如品牌主色、超级符号、字体家族）在任何场景都不允许被覆盖。',
  },
  {
    code: 'P2',
    title: '场景增强 > 默认',
    detail:
      '在保留底线的前提下，营销 / 子品牌 / 大促等"场景规范"可以覆盖 C 端 UI 默认规范。',
  },
  {
    code: 'P3',
    title: '叠加冲突回退主品牌',
    detail:
      '多规范叠加产生冲突且无法协商时，统一回退到主品牌规范作为最终锚点。',
  },
  {
    code: 'P4',
    title: 'AI 消费版本化规则',
    detail:
      'rules-priority.md 是唯一权威源；AI Prompt、审核机器人、模板引擎均读取此文件。',
  },
]

/** 场景化权重决策 */
export type ScenarioRule = {
  id: string
  name: string
  description: string
  priorities: Record<string, RulePriority>
  note: string
}

export const scenarios: ScenarioRule[] = [
  {
    id: 'c-end',
    name: 'C 端通用页面',
    description: '主站 / 详情 / 我的等常规 UI 场景',
    priorities: {
      verbal: 'ui',
      color: 'ui',
      motion: 'ui',
      typography: 'brand',
      graphic: 'brand',
      layout: 'ui',
    },
    note: 'UI 规范默认权重最高，但字体与图形回归品牌底线',
  },
  {
    id: 'brand-kv',
    name: '品牌主 KV',
    description: '16.0 主品牌发声物料 · 高规格视觉',
    priorities: {
      verbal: 'brand',
      color: 'brand',
      motion: 'brand',
      typography: 'brand',
      graphic: 'brand',
      layout: 'brand',
    },
    note: '全维度品牌规范主导，营销与 UI 不可破红线',
  },
  {
    id: 'campaign-main',
    name: '大促主会场',
    description: '618 / 1111 / 年货节主会场视觉',
    priorities: {
      verbal: 'marketing',
      color: 'blend',
      motion: 'marketing',
      typography: 'brand',
      graphic: 'marketing',
      layout: 'marketing',
    },
    note: '色彩为品牌+营销叠加（如京东红 + 大促亮黄），字体保持品牌底线',
  },
  {
    id: 'campaign-h5',
    name: '大促互动 H5',
    description: '抽奖 / 玩法 / 互动型营销物料',
    priorities: {
      verbal: 'marketing',
      color: 'marketing',
      motion: 'marketing',
      typography: 'brand',
      graphic: 'marketing',
      layout: 'marketing',
    },
    note: '玩法导向，营销规范全面主导，仅字体保持品牌',
  },
  {
    id: 'marketing-floor',
    name: '营销楼层组件',
    description: '主站内嵌的营销楼层 / Banner / 入口',
    priorities: {
      verbal: 'marketing',
      color: 'marketing',
      motion: 'ui',
      typography: 'brand',
      graphic: 'marketing',
      layout: 'ui',
    },
    note: 'C 端容器承载营销内容：版式与动效跟 UI，色彩与文案跟营销',
  },
  {
    id: 'sub-brand-app',
    name: '子品牌专属场景',
    description: '京东外卖 / 健康 / 金融等 1.6 矩阵 App 主场',
    priorities: {
      verbal: 'sub-brand',
      color: 'sub-brand',
      motion: 'ui',
      typography: 'brand',
      graphic: 'sub-brand',
      layout: 'ui',
    },
    note: '主导权下放给子品牌，字体回归主品牌，版式跟 C 端 UI',
  },
  {
    id: 'cross-brand',
    name: '跨子品牌合作',
    description: '如京东外卖 × 京东到家联合活动',
    priorities: {
      verbal: 'marketing',
      color: 'blend',
      motion: 'marketing',
      typography: 'brand',
      graphic: 'blend',
      layout: 'marketing',
    },
    note: '色彩与图形需叠加协商；冲突时回退主品牌作为统一锚点（P3）',
  },
]

/** AI 工程化中的消费方式 */
export type AIConsumer = {
  id: string
  title: string
  description: string
}

export const aiConsumers: AIConsumer[] = [
  {
    id: 'prompt',
    title: 'LLM Agent · Prompt 权重提示词',
    description: '语义翻译 Agent 在生成 Prompt 时将本表作为权重输入',
  },
  {
    id: 'review',
    title: '审核机器人 · L1 规则判定',
    description: '三级审核中 L1 自动机审直接消费本表的优先级规则',
  },
  {
    id: 'template',
    title: '模板引擎 · 场景规则集 ID',
    description: '设计 AI 平台中"场景模板"绑定对应规则集，自动应用权重',
  },
]
