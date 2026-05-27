/**
 * 海报 AI 工程化管线 · 「品牌资产 → 运营海报」案例蓝本
 * 案例：京东校园招聘推广海报 × 3 张（参考用户提供的图1/图2/图3）
 */

export type SpecField = {
  key: string
  label: string
  /** 校招海报实例值 · 多行用 \n 分隔 */
  example: string
  comment?: string
}

export type SpecSection = {
  id: string
  iconKey: string
  label: string
  english: string
  description: string
  fields: SpecField[]
}

export const specSections: SpecSection[] = [
  {
    id: 'task',
    iconKey: 'ClipboardList',
    label: '任务元信息',
    english: 'task',
    description: '回答 Why / What / Where / How many — 决定渲染规格与渠道',
    fields: [
      { key: 'purpose', label: '目的', example: '京东校园招聘推广' },
      { key: 'scenario', label: '场景', example: '2026 届秋招启动' },
      {
        key: 'channel',
        label: '投放渠道',
        example: '线下高校张贴海报 · 线上招聘官网 Banner · 朋友圈九宫格',
      },
      { key: 'quantity', label: '数量', example: '3 张系列' },
      { key: 'aspect_ratio', label: '基础比例', example: '3:4' },
      { key: 'deliverable_size', label: '交付尺寸', example: '1080 × 1440 px' },
      { key: 'audience', label: '目标受众', example: '2026 届应届毕业生 · Z 世代' },
      { key: 'tone', label: '情感调性', example: '年轻 · 朝气 · 自信' },
    ],
  },
  {
    id: 'brand_anchor',
    iconKey: 'Anchor',
    label: '品牌锚点',
    english: 'brand_anchor',
    description: '指向品牌资产中台的具体版本，确保 IP / 色 / 字 / KV 一致性',
    fields: [
      { key: 'brand', label: '品牌', example: '京东主品牌' },
      { key: 'brand_version', label: '品牌版本', example: 'JD APP 17.0 Brand Guidelines' },
      { key: 'primary_color', label: '主色', example: '#E1251B（JD 红）' },
      { key: 'accent_color', label: '强调色', example: '#FF6E14（焦点高亮专用）' },
      { key: 'font_family', label: '字体家族', example: 'JDLAB Sans 中文家族' },
      { key: 'mood_tags', label: 'Mood 标签', example: 'Smart · Light · Uplift · 年轻 · 朝气' },
      { key: 'ip_role', label: 'IP 角色', example: 'Joy（京东狗）' },
      {
        key: 'ip_assets',
        label: 'IP 三视图',
        example: 'jd-joy-3view-{front | half | side}.png（参考图 2）',
      },
      { key: 'kv_reference', label: 'KV 参考', example: 'jd-app-17-brand-kv.png（参考图 3）' },
    ],
  },
  {
    id: 'copy',
    iconKey: 'Type',
    label: '文案系统',
    english: 'copy',
    description: '把文案当作结构化数据 · 锁定句法、可重复生成、焦点词可控',
    fields: [
      { key: 'layout_archetype', label: '排版原型', example: '三段排比 + 焦点词高亮' },
      {
        key: 'syntax_template',
        label: '句法模板',
        example: '全国 {形容词最高级} 的 {业务名词} 平台',
      },
      {
        key: 'variants',
        label: '三段变体',
        example:
          '01 · 全国「最稳定」的日销平台\n02 · 全国「最好」的品牌建设的平台\n03 · 全国商品全生命周期回报率「最高」的平台',
        comment: '焦点词用「」标注，渲染时换成 accent_color 描红',
      },
      {
        key: 'highlight_treatment',
        label: '焦点处理',
        example: 'color = accent_color (#FF6E14) · weight = bold · underline = false',
      },
    ],
  },
  {
    id: 'visual_spec',
    iconKey: 'LayoutTemplate',
    label: '视觉规格',
    english: 'visual_spec',
    description: '决定 composition 与 focal hierarchy · 避免文字与角色互相遮挡',
    fields: [
      { key: 'composition', label: '构图', example: '左文 + 右角色（3:4 竖版）' },
      {
        key: 'focal_hierarchy',
        label: '焦点层级',
        example:
          '① 主标题文案（占画面 ~35% 高度）\n② Joy 角色 + 表情（~50% 高度）\n③ 校招 logo + 投递二维码（底部 ~10%）',
      },
      {
        key: 'background',
        label: '背景',
        example: '京东红主色渐变 + 散落 3D 购物图标（购物袋 / 优惠券 / AI 标签 / 折扣 / 星光）',
      },
    ],
  },
  {
    id: 'character',
    iconKey: 'Smile',
    label: '角色指令',
    english: 'character_directive',
    description: '锁定 IP 一致性 · 三张系列只换 pose 不换长相',
    fields: [
      { key: 'view', label: '视角', example: '正面（参考图 2 正面三视图）' },
      {
        key: 'pose',
        label: '姿势 × 3',
        example: '01 · 张开手臂欢迎\n02 · 比心\n03 · 拍胸脯（自信担当）',
        comment: '一一对应三段文案 tone',
      },
      { key: 'expression', label: '表情', example: '笑眯眼 winking（参考图 3）' },
      { key: 'rendering', label: '渲染风格', example: '3D 半透明发光（参考图 3 KV）' },
      { key: 'scale', label: '画面占比', example: '~50% 高度' },
      { key: 'position', label: '位置', example: '画面右侧 / 下侧（让位文案）' },
      {
        key: 'consistency_lock',
        label: '一致性锁',
        example: 'IP-Adapter weight ≥ 0.85 · CLIP similarity ≥ 0.90',
      },
    ],
  },
  {
    id: 'style',
    iconKey: 'Palette',
    label: '风格指令',
    english: 'style_directive',
    description: '锁定艺术方向 · 用 LoRA 替代抽象描述、可复现',
    fields: [
      {
        key: 'art_direction',
        label: '艺术方向',
        example: '3D 半透明发光 + 鲜亮 vivid + 现代 modern',
      },
      { key: 'illustration_vs_photo', label: '插画 vs 摄影', example: 'pure illustration' },
      { key: 'lighting', label: '光照', example: 'rim light + soft shadow' },
      { key: 'texture', label: '材质', example: 'glossy + slight_glow' },
      {
        key: 'reference_lora',
        label: '参考 LoRA',
        example: 'jd-app-17-style-lora-v1.safetensors',
      },
    ],
  },
  {
    id: 'constraints',
    iconKey: 'ShieldCheck',
    label: '约束条件',
    english: 'constraints',
    description: 'Must / Must-not 双清单 · 直接喂给负向 prompt 与防线',
    fields: [
      {
        key: 'must_include',
        label: '必须包含',
        example:
          '· Joy IP 识别度 ≥ 90%\n· 京东红主色占画面 ≥ 60%\n· 三段文案完整且逐字一致（OCR 校验）\n· 校招 logo + 投递入口',
      },
      {
        key: 'must_exclude',
        label: '必须避免',
        example:
          '· 写实摄影 / 真人\n· 灰冷调色\n· 任何竞品 logo\n· AI 痕迹（多手指 / 耳钉错位 / 文字乱码）',
      },
      {
        key: 'negative_prompt',
        label: '负向 Prompt',
        example: 'blurry, photorealistic, low quality, distorted hands, watermark, text artifacts',
      },
    ],
  },
  {
    id: 'gates',
    iconKey: 'GitBranch',
    label: '审核双防线',
    english: 'review_gates',
    description: 'P0 品牌 DNA 卡死 · P1 交付质量兜底（与现有 Marketing Engine 一致）',
    fields: [
      {
        key: 'P0_brand_dna',
        label: 'P0 品牌 DNA',
        example:
          '· IP 还原度 ≥ 90%（CLIP similarity）\n· 主色占比合规\n· 文案逐字一致（OCR 校验）',
      },
      {
        key: 'P1_quality',
        label: 'P1 交付质量',
        example: '· 300 dpi 印刷可读\n· 三张系列风格漂移 ≤ 5%\n· 角色无畸变 / 无手指错乱',
      },
    ],
  },
  {
    id: 'variations',
    iconKey: 'Layers',
    label: '输出变体策略',
    english: 'output_variations',
    description: '系列海报的"变量 vs 不变量"显式声明',
    fields: [
      { key: 'count', label: '数量', example: '3 张' },
      {
        key: 'diff_dimension',
        label: '变化维度',
        example: 'copy + pose（背景、角色长相、风格保持完全一致）',
      },
      { key: 'lock_dimension', label: '锁死维度', example: '角色长相 · 主色 · 字体 · 构图骨架' },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* 工程化管线 8 阶段                                                            */
/* -------------------------------------------------------------------------- */

export type PipelineStage = {
  index: number
  id: string
  iconKey: string
  label: string
  english: string
  inputs: string
  outputs: string
  tools: string
  duration: string
  failurePatterns: string[]
}

export const pipelineStages: PipelineStage[] = [
  {
    index: 1,
    id: 'parser',
    iconKey: 'Languages',
    label: 'Brief Parser',
    english: 'Stage 1 · LLM 把自然语言转结构化 Spec',
    inputs: '自然语言 brief（PRD / 微信对话 / Slack 描述）',
    outputs: 'spec.yaml（9 段结构化字段）',
    tools: 'GPT-4 / Claude / Qwen + Spec Schema',
    duration: '5 – 10s',
    failurePatterns: ['字段歧义未澄清', '关键字段缺失未追问'],
  },
  {
    index: 2,
    id: 'resolver',
    iconKey: 'Database',
    label: 'Asset Resolver',
    english: 'Stage 2 · 按 brand_version 从中台拉资产',
    inputs: 'spec.brand_anchor + spec.style_directive',
    outputs: 'IP png · palette json · 字体 woff2 · LoRA path · KV 风格图',
    tools: '品牌资产中台 API · RAG 检索',
    duration: '2 – 5s',
    failurePatterns: ['品牌版本不匹配', 'LoRA 与 base model 不兼容'],
  },
  {
    index: 3,
    id: 'composer',
    iconKey: 'LayoutGrid',
    label: 'Layout Composer',
    english: 'Stage 3 · 由 visual_spec 出 ControlNet 草图',
    inputs: 'visual_spec.composition + aspect_ratio',
    outputs: 'ControlNet 草稿（lineart / depth / 区域 mask）',
    tools: '模板库 + Auto-layout 引擎',
    duration: '3 – 8s',
    failurePatterns: ['文字与角色避让冲突', '焦点层级反了'],
  },
  {
    index: 4,
    id: 'character',
    iconKey: 'Smile',
    label: 'Character Render',
    english: 'Stage 4 · 角色生成（IP-Adapter + Pose ControlNet）',
    inputs: 'ip_assets + pose + expression + view',
    outputs: '透明背景角色 PNG × N（pose 变体）',
    tools: 'SD/Flux + IP-Adapter + OpenPose ControlNet',
    duration: '30 – 60s / 张',
    failurePatterns: ['IP 一致性 < 0.85', '手指畸变', '面部走形'],
  },
  {
    index: 5,
    id: 'background',
    iconKey: 'Image',
    label: 'Background Render',
    english: 'Stage 5 · 背景生成（风格 LoRA 主导）',
    inputs: 'style_directive + palette + KV 风格图',
    outputs: '红色渐变 + 3D 图标群背景',
    tools: 'SD/Flux + 风格 LoRA + Style Image Conditioning',
    duration: '20 – 40s',
    failurePatterns: ['主色占比不足 60%', '元素堆叠混乱'],
  },
  {
    index: 6,
    id: 'compositor',
    iconKey: 'Combine',
    label: 'Compositor',
    english: 'Stage 6 · 文案 + 角色 + 背景 + Logo 合成',
    inputs: '上游所有产物 + copy.variants + 焦点描红规则',
    outputs: '单张 1080×1440 完整海报（带文字层）',
    tools: 'PIL / Skia / Figma Plugin API · 品牌字体渲染',
    duration: '5 – 10s',
    failurePatterns: ['文字遮挡角色', '字间距漂移', '焦点词未描红'],
  },
  {
    index: 7,
    id: 'variation',
    iconKey: 'Copy',
    label: 'Variation Engine',
    english: 'Stage 7 · 按变量/不变量批量出系列',
    inputs: 'spec.output_variations + 单张主图',
    outputs: 'N 张系列（仅按 diff_dimension 变化）',
    tools: '批量调度 + Seed 锁',
    duration: 'N × 单张耗时',
    failurePatterns: ['系列风格漂移 > 5%', '角色长相不一致'],
  },
  {
    index: 8,
    id: 'adapter',
    iconKey: 'Crop',
    label: 'Channel Adapter',
    english: 'Stage 8 · 多渠道 / 多分辨率适配',
    inputs: 'channel 清单 + 单张主图',
    outputs: '3:4 / 9:16 / 1:1 / 16:9 多分辨率 · PNG / PDF / TIFF',
    tools: 'SAM 智能裁切 + Outpainting + DPI 重采样',
    duration: '5 – 15s / 渠道',
    failurePatterns: ['关键内容被裁掉', '文字模糊'],
  },
]

/* -------------------------------------------------------------------------- */
/* Mermaid 流程图                                                              */
/* -------------------------------------------------------------------------- */

export const posterPipelineMermaid = `flowchart TB
  classDef stage fill:#ffffff,stroke:#dddddd,stroke-width:1px,color:#222222
  classDef gate fill:#fff5f5,stroke:#ff385c,stroke-width:1px,color:#222222
  classDef asset fill:#f7f7f7,stroke:#c1c1c1,stroke-width:1px,color:#222222,stroke-dasharray: 4 2
  classDef out fill:#f7f7f7,stroke:#222222,stroke-width:1px,color:#222222

  BRIEF([自然语言 Brief]):::stage
  ASSETS[(品牌资产中台<br/>IP · 色板 · 字体 · KV · 文案模板 · LoRA)]:::asset

  S1[Stage 1 · Brief Parser<br/>LLM 抽 Spec YAML]:::stage
  S2[Stage 2 · Asset Resolver<br/>按 brand_version 拉素材]:::stage
  S3[Stage 3 · Layout Composer<br/>ControlNet 草图]:::stage
  S4[Stage 4 · Character Render<br/>IP-Adapter + Pose]:::stage
  G1{{P0 防线<br/>品牌 DNA 合规}}:::gate
  S5[Stage 5 · Background Render<br/>SD/Flux + 风格 LoRA]:::stage
  S6[Stage 6 · Compositor<br/>文案 + 角色 + 背景合成]:::stage
  S7[Stage 7 · Variation Engine<br/>批量出 N 张系列]:::stage
  G2{{P1 防线<br/>交付质量 + 渠道规格}}:::gate
  S8[Stage 8 · Channel Adapter<br/>多分辨率 / 多渠道]:::stage
  OUT([N 张 × M 渠道海报矩阵]):::out

  BRIEF --> S1 --> S2 --> S3 --> S4 --> G1 --> S5 --> S6 --> S7 --> G2 --> S8 --> OUT
  ASSETS -.-> S2
  ASSETS -.-> S4
  ASSETS -.-> S5
  ASSETS -.-> S6
`

/* -------------------------------------------------------------------------- */
/* 品牌资产中台分类                                                              */
/* -------------------------------------------------------------------------- */

export type AssetCategory = {
  id: string
  iconKey: string
  label: string
  schema: string
  items: string[]
}

export const assetCategories: AssetCategory[] = [
  {
    id: 'ip',
    iconKey: 'Smile',
    label: 'IP 角色库',
    schema: 'PNG 透明底 + PSD 分层 + 三视图 + 表情包 + 姿态包',
    items: ['Joy 三视图', 'Joy 表情包 12 款', 'Joy 姿态包 18 款', 'AR/3D Joy 模型'],
  },
  {
    id: 'palette',
    iconKey: 'Palette',
    label: '色板',
    schema: 'JSON Token · 主色 / 辅助 / accent / 渐变 / 中性',
    items: ['JD 红 #E1251B', '京东橙 #FF6E14', '副品牌色板', '渐变方案'],
  },
  {
    id: 'font',
    iconKey: 'Type',
    label: '字体',
    schema: 'WOFF2 + 商用授权 · 中文 / 英文 / 数字',
    items: ['JDLAB Sans 中文', 'JD Display 英文', '京东喜黑'],
  },
  {
    id: 'kv',
    iconKey: 'Image',
    label: 'KV 视觉风格',
    schema: '主 KV / 节日 KV / 子品牌 KV',
    items: ['JD APP 17.0 KV', '618 KV', '校招专属 KV', '会员日 KV'],
  },
  {
    id: 'copy',
    iconKey: 'Quote',
    label: '文案模板库',
    schema: '句法模板 · 排比 / 数据 / 故事 / 单点突出',
    items: ['三段排比 · 最X模板', '单点突出 · 数据驱动', '场景故事化'],
  },
  {
    id: 'lora',
    iconKey: 'Cpu',
    label: 'LoRA 模型',
    schema: '主品牌 / 子品牌 / 节日 / 风格',
    items: ['jd-app-17-style-lora', 'jd-joy-character-lora', '校招-2026-style-lora'],
  },
  {
    id: 'template',
    iconKey: 'LayoutTemplate',
    label: '布局模板',
    schema: '海报 / Banner / 长图 / 九宫格',
    items: ['竖版 3:4 海报', '横版 16:9 Banner', '朋友圈 1:1', '长图 9:16'],
  },
]

/* -------------------------------------------------------------------------- */
/* 完整 YAML 给 Agent 直接消费                                                  */
/* -------------------------------------------------------------------------- */

export const posterSpecYaml = `# Poster Spec v0.1 · 京东校招海报 × 3 张

task:
  purpose: 京东校园招聘推广
  scenario: 2026 届秋招启动
  channel: [线下高校张贴海报, 线上招聘官网 Banner, 朋友圈九宫格]
  quantity: 3
  aspect_ratio: '3:4'
  deliverable_size: 1080x1440
  audience: 2026 届应届毕业生 / Z 世代
  tone: [年轻, 朝气, 自信]

brand_anchor:
  brand: 京东主品牌
  brand_version: JD APP 17.0 Brand Guidelines
  primary_color: '#E1251B'
  accent_color: '#FF6E14'
  font_family: JDLAB Sans
  mood_tags: [Smart, Light, Uplift, 年轻, 朝气]
  ip_role: Joy
  ip_assets:
    - jd-joy-3view-front.png
    - jd-joy-3view-half.png
    - jd-joy-3view-side.png
  kv_reference: jd-app-17-brand-kv.png

copy:
  layout_archetype: 三段排比 + 焦点词高亮
  syntax_template: '全国 {形容词最高级} 的 {业务名词} 平台'
  variants:
    - text: 全国最稳定的日销平台
      highlight: 最稳定
      tone: 稳健
    - text: 全国最好的品牌建设的平台
      highlight: 最好
      tone: 信赖
    - text: 全国商品全生命周期回报率最高的平台
      highlight: 最高的
      tone: 价值
  highlight_treatment:
    color: '#FF6E14'
    weight: bold
    underline: false

visual_spec:
  composition: 左文 + 右角色
  focal_hierarchy:
    1: 主标题文案 (~35% 高度)
    2: Joy 角色 + 表情 (~50% 高度)
    3: 校招 logo + 投递二维码 (~10% 底部)
  background:
    style: 京东红渐变 + 散落 3D 购物图标
    palette: ['#E1251B', '#FF6E14']
    elements: [星光, 购物袋, 优惠券, AI 标签, 折扣百分比]

character_directive:
  view: 正面
  poses:
    - 张开手臂欢迎
    - 比心
    - 拍胸脯
  expression: 笑眯眼 winking
  rendering: 3D 半透明发光
  scale: 50%
  position: 右侧
  consistency_lock:
    ip_adapter_weight: 0.85
    clip_similarity_min: 0.90

style_directive:
  art_direction: 3D 半透明发光 + vivid + modern
  illustration_vs_photo: pure_illustration
  lighting: rim light + soft shadow
  texture: glossy + slight_glow
  reference_lora: jd-app-17-style-lora-v1.safetensors

constraints:
  must_include:
    - Joy IP 识别度 ≥ 90%
    - 京东红主色占画面 ≥ 60%
    - 三段文案完整且逐字一致
    - 校招 logo + 投递入口
  must_exclude:
    - 写实摄影
    - 灰冷调色
    - 竞品 logo
    - AI 痕迹 (多手指 / 耳钉错位 / 文字乱码)
  negative_prompt: blurry, photorealistic, low quality, distorted hands, watermark

review_gates:
  P0_brand_dna:
    - clip_similarity >= 0.90
    - primary_color_coverage >= 0.60
    - copy_ocr_exact_match: true
  P1_quality:
    - dpi >= 300
    - series_style_drift <= 0.05
    - face_distortion: 0

output_variations:
  count: 3
  diff_dimension: [copy, pose]
  lock_dimension: [character_identity, palette, font, composition_skeleton]
`
