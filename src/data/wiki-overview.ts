/**
 * UED 设计中心 · 全景脑图数据
 * 覆盖：组织架构 × C 端业务 × B 端业务 × 品牌工程化 × 营销工程化 × 矩阵规范 × 跨类仲裁 × 路线 / 知识 / 工具
 *
 * 注意（Mermaid mindmap 语法）：
 *   - 缩进决定层级，同级节点缩进必须一致
 *   - 节点文字若重复会被合并为同一节点，本数据已去重
 *   - 避免使用裸 `-` / `:` 等特殊字符作为节点开头
 */
export const wikiMindmap = `mindmap
  root((UED 设计中心))
    组织架构
      C 端设计部
      B 端设计部
      品牌与营销设计部
      设计工程化部
    C 端业务矩阵
      京东外卖
      京东到家
      京东特价
      京东点评
      京东金融
      京东出行
      京东健康
    B 端业务矩阵
      商家工作台
      运营管理后台
      内部协作工具
      数据看板平台
    品牌设计工程化
      基础模型层
        LoRA 训练
        IP Adapter
        Negative Prompt
      规则层
        品牌 DNA 编排
      自动化层
        ComfyUI Pipeline
        LLM 语义翻译
      交付层
        Ultimate SD Upscale
      里程碑 M1 至 M3
        M1 原子建模
        M2 规则封装
        M3 全链路闭环
      品牌双道防线
        DNA 合规审核
        印刷质量审核
    营销设计工程化
      资产处理层
        SAM 抠图
        IC-Light 重光照
      矩阵延展层
        Resizing Agent
        Outpainting Engine
      模板引擎层
        Figma to Code
      营销双道防线
        视觉真伪审核
        渠道转化审核
    品牌矩阵心智规范 1.6
      品牌定位
      视觉表达
      IP 与角色
      主子品牌关系
      场景体验地图
      资产清单
    规范权重决策表
      品牌规范层
      营销规范层
      UI 规范层
      仲裁原则 4 条
      关键场景 7 个
      规则维度 6 项
    路线图
      Q1 原子层
      Q2 规则封装
      Q3 全链路闭环
      Q4 治理化
    知识库
      RAG 检索
      Prompt 工程
      模型卡片
    工具链
      ComfyUI 节点库
      Figma 设计
      Code Connect 映射
`

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
