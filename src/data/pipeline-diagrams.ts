/** Mermaid 工业级全链路闭环流水线（浅底主题） */

export const brandPipelineMermaid = `flowchart TB
  classDef stage fill:#ffffff,stroke:#cbd5e1,stroke-width:1px,color:#0f172a
  classDef gate fill:#fffbeb,stroke:#d97706,stroke-width:1px,color:#78350f
  classDef out fill:#f8fafc,stroke:#334155,stroke-width:1px,color:#0f172a

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
  classDef stage fill:#ffffff,stroke:#cbd5e1,stroke-width:1px,color:#0f172a
  classDef gate fill:#fffbeb,stroke:#d97706,stroke-width:1px,color:#78350f
  classDef out fill:#f8fafc,stroke:#334155,stroke-width:1px,color:#0f172a

  IN([营销需求 / 商品图]):::stage
  L1[资产处理层<br/>SAM 抠图 · IC-Light 重光照]:::stage
  G1{{第一道防线<br/>视觉真伪与合成审核}}:::gate
  L2[矩阵延展层<br/>Resizing Agent · Outpainting]:::stage
  G2{{第二道防线<br/>渠道规格与转化审核}}:::gate
  L3[模板引擎层<br/>Figma to Code Pipeline]:::stage
  OUT([全渠道 Banner 矩阵]):::out

  IN --> L1 --> G1 --> L2 --> G2 --> L3 --> OUT
`
