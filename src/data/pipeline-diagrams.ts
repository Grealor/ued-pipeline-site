/** Mermaid 工业级全链路闭环流水线（Airbnb 浅底主题） */

export const brandPipelineMermaid = `flowchart TB
  classDef stage fill:#ffffff,stroke:#dddddd,stroke-width:1px,color:#222222
  classDef gate fill:#fff5f5,stroke:#ff385c,stroke-width:1px,color:#222222
  classDef out fill:#f7f7f7,stroke:#222222,stroke-width:1px,color:#222222

  IN([品牌需求 / Prompt]):::stage
  L1[基础模型层<br/>LoRA · IP-Adapter · Negative]:::stage
  G1{{第一道防线<br/>品牌 DNA 合规审核}}:::gate
  L2[ComfyUI 自动化层<br/>ControlNet · LLM 语义翻译]:::stage
  G2{{第二道防线<br/>交付质量与印刷审核}}:::gate
  L3[交付超分层<br/>Ultimate SD Upscale]:::stage
  OUT([品牌 KV / 4K 交付]):::out

  IN --> L1 --> G1 --> L2 --> G2 --> L3 --> OUT
`

export const marketingPipelineMermaid = `flowchart TB
  classDef stage fill:#ffffff,stroke:#dddddd,stroke-width:1px,color:#222222
  classDef gate fill:#fff5f5,stroke:#ff385c,stroke-width:1px,color:#222222
  classDef out fill:#f7f7f7,stroke:#222222,stroke-width:1px,color:#222222

  IN([营销需求 / 商品图]):::stage
  L1[资产处理层<br/>SAM 抠图 · IC-Light 重光照]:::stage
  G1{{第一道防线<br/>视觉真伪与合成审核}}:::gate
  L2[矩阵延展层<br/>Resizing Agent · Outpainting]:::stage
  G2{{第二道防线<br/>渠道规格与转化审核}}:::gate
  L3[模板引擎层<br/>Figma to Code Pipeline]:::stage
  OUT([全渠道 Banner 矩阵]):::out

  IN --> L1 --> G1 --> L2 --> G2 --> L3 --> OUT
`
