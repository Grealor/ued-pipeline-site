/**
 * UED 设计中心 · 全景脑图数据
 * 覆盖：组织架构 × C 端业务 × B 端业务 × 品牌工程化 × 营销工程化 × 矩阵规范 × 跨类仲裁 × 路线 / 知识 / 工具
 *
 * 渲染方式：手写递归 Tree（极简骨架风格）
 *   - 每个节点只在「父 → 第一个子」之间画一条横向 hairline
 *   - 其余兄弟节点靠列对齐自然成行，无 box / 无冗余竖线
 */
export type TreeNode = {
  label: string
  children?: TreeNode[]
}

export const wikiTreeData: TreeNode = {
  label: 'UED 设计中心',
  children: [
    {
      label: '组织架构',
      children: [
        { label: 'C 端设计部' },
        { label: 'B 端设计部' },
        { label: '品牌与营销设计部' },
        { label: '设计工程化部' },
      ],
    },
    {
      label: 'C 端业务矩阵',
      children: [
        { label: '京东外卖' },
        { label: '京东到家' },
        { label: '京东特价' },
        { label: '京东点评' },
        { label: '京东金融' },
        { label: '京东出行' },
        { label: '京东健康' },
      ],
    },
    {
      label: 'B 端业务矩阵',
      children: [
        { label: '商家工作台' },
        { label: '运营管理后台' },
        { label: '内部协作工具' },
        { label: '数据看板平台' },
      ],
    },
    {
      label: '品牌设计工程化',
      children: [
        {
          label: '基础模型层',
          children: [
            { label: 'LoRA 训练' },
            { label: 'IP Adapter' },
            { label: 'Negative Prompt' },
          ],
        },
        {
          label: '规则层',
          children: [{ label: '品牌 DNA 编排' }],
        },
        {
          label: '自动化层',
          children: [
            { label: 'ComfyUI Pipeline' },
            { label: 'LLM 语义翻译' },
          ],
        },
        {
          label: '交付层',
          children: [{ label: 'Ultimate SD Upscale' }],
        },
        {
          label: '里程碑',
          children: [
            { label: 'M1 原子建模' },
            { label: 'M2 规则封装' },
            { label: 'M3 全链路闭环' },
          ],
        },
        {
          label: '品牌双道防线',
          children: [
            { label: 'DNA 合规审核' },
            { label: '印刷质量审核' },
          ],
        },
      ],
    },
    {
      label: '营销设计工程化',
      children: [
        {
          label: '资产处理层',
          children: [
            { label: 'SAM 抠图' },
            { label: 'IC-Light 重光照' },
          ],
        },
        {
          label: '矩阵延展层',
          children: [
            { label: 'Resizing Agent' },
            { label: 'Outpainting Engine' },
          ],
        },
        {
          label: '模板引擎层',
          children: [{ label: 'Figma to Code' }],
        },
        {
          label: '营销双道防线',
          children: [
            { label: '视觉真伪审核' },
            { label: '渠道转化审核' },
          ],
        },
      ],
    },
    {
      label: '品牌矩阵规范 1.6',
      children: [
        { label: '品牌定位' },
        { label: '视觉表达' },
        { label: 'IP 与角色' },
        { label: '主子品牌关系' },
        { label: '场景体验地图' },
        { label: '资产清单' },
      ],
    },
    {
      label: '规范权重决策表',
      children: [
        { label: '品牌规范层' },
        { label: '营销规范层' },
        { label: 'UI 规范层' },
        { label: '仲裁原则 4 条' },
        { label: '关键场景 7 个' },
        { label: '规则维度 6 项' },
      ],
    },
    {
      label: '路线图',
      children: [
        { label: 'Q1 原子层' },
        { label: 'Q2 规则封装' },
        { label: 'Q3 全链路闭环' },
        { label: 'Q4 治理化' },
      ],
    },
    {
      label: '知识库',
      children: [
        { label: 'RAG 检索' },
        { label: 'Prompt 工程' },
        { label: '模型卡片' },
      ],
    },
    {
      label: '工具链',
      children: [
        { label: 'ComfyUI 节点库' },
        { label: 'Figma 设计' },
        { label: 'Code Connect 映射' },
      ],
    },
  ],
}

export type WikiBranch = {
  id: string
  label: string
  category: 'org' | 'c-end' | 'b-end' | 'engine' | 'spec' | 'plan'
  children: number
  hint: string
}

export const wikiBranches: WikiBranch[] = [
  {
    id: 'org',
    label: '组织架构',
    category: 'org',
    children: 4,
    hint: 'UED 四部门拓扑 · 品牌与营销设计部归属与协作',
  },
  {
    id: 'c-end',
    label: 'C 端业务矩阵',
    category: 'c-end',
    children: 7,
    hint: '7 个核心 App · 京东外卖 / 到家 / 特价 / 点评 / 金融 / 出行 / 健康',
  },
  {
    id: 'b-end',
    label: 'B 端业务矩阵',
    category: 'b-end',
    children: 4,
    hint: '商家工作台 / 运营后台 / 协作工具 / 数据看板',
  },
  {
    id: 'brand-engine',
    label: '品牌设计工程化',
    category: 'engine',
    children: 17,
    hint: '基础模型 / 规则 / 自动化 / 交付 / 里程碑 / 双道防线',
  },
  {
    id: 'marketing-engine',
    label: '营销设计工程化',
    category: 'engine',
    children: 9,
    hint: '资产处理 / 矩阵延展 / 模板引擎 / 双道防线',
  },
  {
    id: 'portfolio',
    label: '品牌矩阵心智规范 1.6',
    category: 'spec',
    children: 6,
    hint: '统一二级模板 · 定位 / 视觉 / IP / 关系 / 场景 / 资产',
  },
  {
    id: 'rules',
    label: '规范权重决策表',
    category: 'spec',
    children: 6,
    hint: '三层规范 × 4 条仲裁 × 7 场景 × 6 维度',
  },
  {
    id: 'roadmap',
    label: '路线图',
    category: 'plan',
    children: 4,
    hint: 'Q1 原子 → Q2 规则 → Q3 全链路 → Q4 治理化',
  },
  {
    id: 'knowledge',
    label: '知识库',
    category: 'plan',
    children: 3,
    hint: 'RAG 检索 / Prompt 工程 / 模型卡片',
  },
  {
    id: 'tooling',
    label: '工具链',
    category: 'plan',
    children: 3,
    hint: 'ComfyUI / Figma / Code Connect',
  },
]

export const wikiStats = {
  topLevel: wikiBranches.length,
  leafEstimate: wikiBranches.reduce((sum, b) => sum + b.children, 0),
  cEnd: 7,
  bEnd: 4,
  engines: 2,
  specs: 2,
}

export const wikiCategoryMeta: Record<
  WikiBranch['category'],
  { label: string; chipClass: string }
> = {
  org: {
    label: '组织',
    chipClass: 'border-hairline bg-surface-strong text-ink',
  },
  'c-end': {
    label: 'C 端',
    chipClass: 'border-rausch/40 bg-rausch/10 text-rausch-active',
  },
  'b-end': {
    label: 'B 端',
    chipClass: 'border-border-strong bg-surface-soft text-body',
  },
  engine: {
    label: '工程化',
    chipClass: 'border-ink bg-ink text-canvas',
  },
  spec: {
    label: '规范',
    chipClass: 'border-amber-500 bg-amber-50 text-amber-900',
  },
  plan: {
    label: '规划',
    chipClass: 'border-hairline-soft bg-surface-soft text-muted',
  },
}
