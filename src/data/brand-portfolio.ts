import {
  Bike,
  HeartPulse,
  Plane,
  Star,
  Store,
  Tag,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

/** 单个子品牌的二级规范模板 */
export type SubBrandField = {
  key: 'positioning' | 'identity' | 'mascot' | 'relation' | 'scenarios' | 'resources'
  label: string
  hint: string
}

export type SubBrand = {
  id: string
  code: string
  name: string
  enName: string
  tagline: string
  icon: LucideIcon
  fields: {
    positioning: string
    identity: string
    mascot: string
    relation: string
    scenarios: string[]
    resources: string
  }
}

/** 七个子品牌共用的二级模板字段定义 */
export const subBrandFields: SubBrandField[] = [
  {
    key: 'positioning',
    label: 'a. 品牌定位与心智',
    hint: 'Positioning & Mindset · 一句话讲清子品牌是什么、为谁服务',
  },
  {
    key: 'identity',
    label: 'b. 视觉基础（Logo / 图形 / 色彩 / 字体）',
    hint: 'Brand Identity · 视觉资产的高层概述，参数细节回引 1.2',
  },
  {
    key: 'mascot',
    label: 'c. IP 与吉祥物',
    hint: 'Mascot · 若有专属 IP / 吉祥物，标明其与主站 JOY 的关系',
  },
  {
    key: 'relation',
    label: 'd. 与主站 16.0 的关系',
    hint: 'Relation to 16.0 · 继承哪些、差异在哪、底线红线',
  },
  {
    key: 'scenarios',
    label: 'e. 适用场景与边界',
    hint: 'Scenarios · 哪些场景用子品牌，哪些回主品牌',
  },
  {
    key: 'resources',
    label: 'f. 规范资产下载',
    hint: 'Resources · 设计资源包、Figma 文件、模型与 LoRA 入口',
  },
]

/**
 * 七个子品牌的二级模板内容。
 * 其中视觉参数、吉祥物等细节标注为「待品牌组确认」/「待补充」，
 * 在拿到正式规范后回填即可，结构不变。
 */
export const subBrands: SubBrand[] = [
  {
    id: 'waimai',
    code: '1.6.1',
    name: '京东外卖',
    enName: 'JD Waimai',
    tagline: '即时配送 · 餐饮生活服务，强调"快"与"近"',
    icon: Bike,
    fields: {
      positioning:
        '面向即时餐饮配送场景，承接用户对"快、近、热、稳"的核心心智。',
      identity:
        '继承京东红主色调，强化生活活力副色与暖食色感；字体趋向更圆润、亲和（具体参数待品牌组确认）。',
      mascot: 'JOY 衍生形象 / 配送员视觉符号体系（待补充）',
      relation:
        '保留京东红作为主底色（不可破红线），副色与图形语言强化餐饮亲和感，避免冷峻金属质感。',
      scenarios: ['外卖 App 主场', '商家合作物料', '骑手与配送链路场景'],
      resources: '待挂载',
    },
  },
  {
    id: 'jddj',
    code: '1.6.2',
    name: '京东到家',
    enName: 'JDDJ',
    tagline: '即时零售 · 1 小时达，主打商超与生鲜',
    icon: Store,
    fields: {
      positioning:
        '面向商超即时购与生鲜配送场景，承接用户对"鲜、近、稳"的心智。',
      identity:
        '京东主色与生鲜清新色双轨；图形语言强调时间感与产地感（具体参数待品牌组确认）。',
      mascot: '待补充',
      relation:
        '延续京东主色为信任锚点，副色与版式强化即时性与生鲜感。',
      scenarios: ['到家 App', '商超合作 SKU 物料', '生鲜配送链路场景'],
      resources: '待挂载',
    },
  },
  {
    id: 'discount',
    code: '1.6.3',
    name: '京东特价',
    enName: 'JD Discount',
    tagline: '极致性价比 · 下沉市场与日常省钱',
    icon: Tag,
    fields: {
      positioning:
        '面向价格敏感人群与下沉市场，承接"省钱、实在、靠谱"的心智。',
      identity:
        '强促销视觉系（橙红 / 亮黄方向）+ 大字号 + 价格符号醒目；版式简单直接（具体参数待品牌组确认）。',
      mascot: '待补充',
      relation:
        '保留京东红，叠加更强烈的促销视觉冲击；但价格符号与折扣表达需要纳入"营销规范"约束。',
      scenarios: ['特价频道', '低价商品大图', '下沉市场推广物料'],
      resources: '待挂载',
    },
  },
  {
    id: 'review',
    code: '1.6.4',
    name: '京东点评',
    enName: 'JD Review',
    tagline: '本地生活点评与口碑内容',
    icon: Star,
    fields: {
      positioning:
        '面向本地生活点评、商家口碑与种草内容，承接"真实、有用、可信"的心智。',
      identity:
        '暖色调亲和系，弱化电商促销感；版式以内容为主、图文并重（具体参数待品牌组确认）。',
      mascot: '待补充',
      relation:
        '弱化京东主色，强化本地生活与社区调性；文案语气更偏生活化、口语化。',
      scenarios: ['点评 / 评分 App', '商家详情页', '种草内容与 UGC 场景'],
      resources: '待挂载',
    },
  },
  {
    id: 'finance',
    code: '1.6.5',
    name: '京东金融',
    enName: 'JD Finance',
    tagline: '稳健可信 · 个人金融与支付服务',
    icon: Wallet,
    fields: {
      positioning:
        '面向个人金融与支付服务场景，承接"稳、专、可信赖"的心智。',
      identity:
        '京东蓝主调 + 深色稳重感 + 克制金属质感；字体趋向更现代、专业（具体参数待品牌组确认）。',
      mascot: '待补充',
      relation:
        '减少京东红出现频率，强化京东蓝与稳重感；信息层级与合规说明优先级最高。',
      scenarios: ['金融 App / H5', '理财与信用产品物料', '支付场景视觉'],
      resources: '待挂载',
    },
  },
  {
    id: 'mobility',
    code: '1.6.6',
    name: '京东出行',
    enName: 'JD Mobility',
    tagline: '一站式出行服务 · 票务与日常通勤',
    icon: Plane,
    fields: {
      positioning:
        '面向票务与日常出行场景，承接"便捷、可靠、有节奏"的心智。',
      identity:
        '科技蓝主调 + 出行场景化辅助色；图形语言强调动线、速度与节奏（具体参数待品牌组确认）。',
      mascot: '待补充',
      relation:
        '继承京东蓝主底色，叠加出行场景元素与动效节奏感。',
      scenarios: ['出行 App', '机票 / 火车票 / 酒店物料', '网约车与日常通勤场景'],
      resources: '待挂载',
    },
  },
  {
    id: 'health',
    code: '1.6.7',
    name: '京东健康',
    enName: 'JD Health',
    tagline: '专业医疗 · 健康呵护与在线问诊',
    icon: HeartPulse,
    fields: {
      positioning:
        '面向医疗与健康服务场景，承接"专业、安全、温暖"的心智。',
      identity:
        '医疗绿 / 淡蓝专业感为辅；版式克制、留白充足；专业字体优先（具体参数待品牌组确认）。',
      mascot: '待补充',
      relation:
        '减少高饱和促销色，加入医疗专属色与专业字体；合规与责任声明视觉权重提升。',
      scenarios: ['健康 App / 在线问诊', '药品与医疗器械物料', '保健咨询场景'],
      resources: '待挂载',
    },
  },
]
