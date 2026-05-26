# 品牌与营销设计 AI 工程化看板

UED 团队用于沉淀与展示「**品牌与营销设计 AI 工程化**」整体规划、规范产出与执行节奏的内部看板与知识库。

> 项目目标：将主观的 Brand Guideline 与营销范式转化为可被 AI 消费、可被工程化复用的 **Brand Code** 与 **Marketing Code**，实现品牌确定性与营销高并发的规模化分发。

---

## WIKI 总体结构

```
品牌与营销设计 WIKI
│
├── 00. 总览 (Overview)
│   ├── 部门定位 · 北极星指标
│   ├── 知识库地图
│   └── 阅读指引
│
├── 01. 品牌类规范  (Brand Category)
│   ├── 1.1 [P0] 主站品牌理念        Core Brand Concept (App 16.0)
│   ├── 1.2 [P0] 基础规范             Brand Identity (logo / 图形 / 色彩 / 字体)
│   ├── 1.3 [P0] IP 应用              Mascot Applications
│   ├── 1.4 [P1] 文案与措辞           Verbal Identity
│   ├── 1.5 [P1] 推广与运营           Operations
│   ├── 1.6 [P1] 品牌矩阵心智规范     Brand Portfolio
│   │   ├── 1.6.1 京东外卖   JD Waimai
│   │   ├── 1.6.2 京东到家   JDDJ
│   │   ├── 1.6.3 京东特价   JD Discount
│   │   ├── 1.6.4 京东点评   JD Review
│   │   ├── 1.6.5 京东金融   JD Finance
│   │   ├── 1.6.6 京东出行   JD Mobility
│   │   └── 1.6.7 京东健康   JD Health
│   └── 1.7 [P1] 规范资产             Resources
│
├── 02. 营销类规范  (Marketing Category)
│   ├── 2.1 [P0] 原则依据             Design Principles
│   ├── 2.2 [P0] 基础规范             Foundation
│   ├── 2.3 [P0] 通用组件             Components
│   ├── 2.4 [P0] 大促体系             Campaign（链路 + 组件）
│   ├── 2.5 [P0] 互动体系             Interactive（链路 + 组件）
│   ├── 2.6 [P1] 动效声音震感         Motion Audio Haptics
│   └── 2.7 [P1] 规范资产             Resources
│
├── 03. 跨类规则与权重  (Cross-category Rules)
│   └── 规范权重决策表 (rules-priority.md)
│       ├── 三层规范定义（品牌 / 营销 / C 端 UI）
│       ├── 仲裁原则（P1 品牌底线 / P2 场景增强 / P3 冲突回退 / P4 版本化）
│       ├── 场景化权重矩阵（7 场景 × 6 维度）
│       └── AI 工程化中的消费方式
│
├── 04. 设计 AI 工程化方法论  (How we work)
│   ├── 4.1 总览与原则（双轴框架 + 两道审核防线 + 三级快速审核）
│   ├── 4.2 品牌设计工程化 · Brand AI Engine
│   ├── 4.3 营销图像设计工程化 · Marketing Image
│   ├── 4.4 营销 UI 设计工程化 · Marketing UI
│   └── 4.5 资产扩展与快速审核 · Asset Scaling & QC
│
├── 05. 执行规划  (Roadmap)
│   ├── 综合路线图（4 条生产线统一节奏的 M1 / M2 / M3）
│   ├── 当前阶段规范输出排期（基于 P0 / P1）
│   └── 重点专项与里程碑
│
├── 06. 知识沉淀  (Knowledge)
│   ├── Prompt 库 / Negative 库
│   ├── LoRA · 模型清单
│   ├── 评测集 · 标杆案例库
│   └── 复盘与最佳实践
│
└── 07. 平台与工具  (Tools)
    ├── zero 平台总览（demo / relay / code 三分支承载）
    ├── ComfyUI 工作流清单
    └── 数据看板
```

---

## 当前看板的四个 Tab

| Tab | 对应章节 | 核心内容 |
|---|---|---|
| **品牌设计工程化** | 04.2 Brand AI Engine | 原子 / 规则 / 策略层 + Pipeline + 两道防线 + M1-M3 |
| **营销设计工程化** | 04.3 + 04.4 Marketing Image / UI | 营销图像与 UI 双管线 + Pipeline + M1-M3 |
| **品牌矩阵心智规范** | 01.6 Brand Portfolio | 7 个子品牌 · 统一二级模板（定位 / 视觉 / IP / 关系 / 场景 / 资产） |
| **规范权重决策表** | 03 Cross-category Rules | 三层定义 + 4 条仲裁原则 + 7 场景 × 6 维度矩阵 |

---

## 七个子品牌（1.6 节点）

每个子品牌沿用统一的二级模板：

```
1.6.x 子品牌
├── a. 品牌定位与心智   Positioning & Mindset
├── b. 视觉基础         Brand Identity (logo / 图形 / 色彩 / 字体)
├── c. IP 与吉祥物      Mascot
├── d. 与主站 16.0 的关系  Relation to 16.0   ★ 关键
├── e. 适用场景与边界   Scenarios
└── f. 规范资产下载     Resources
```

> 范围差异说明：C 端 APP 矩阵化体系覆盖 5 个子品牌；品牌矩阵心智规范覆盖 7 个；若 C 端补充其它子品牌，直接在 1.6 下追加节点即可。

---

## 跨 WIKI 引用关系

```
                    UED WIKI
                       │
   ┌───────────────────┼───────────────────┐
   │                   │                   │
 C 端              组织架构          品牌与营销设计 ◀── 本仓库
   │                   │                   │
   ├─ Design 基础       └─ 品牌与营销设计部 ─┘  (引用整个 wiki 为知识源)
   │   ├─ 16.0 主品牌规范 ─────────► 01.1
   │   └─ 营销规范 ──────────────► 02 / 04.3 / 04.4
   │
   └─ AI 机制
       └─ 通用 skill / 多角色评审 ──► 04.5 (审核体系)
```

---

## 技术栈

- [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite`）
- [Lucide React](https://lucide.dev/) — 图标
- [Mermaid](https://mermaid.js.org/) — 流程图渲染（含 `@braintree/sanitize-url` 安全依赖）

## 目录结构

```
src/
├── components/                    # 可复用组件
│   ├── MermaidDiagram.tsx
│   ├── PlanMindMap.tsx            # 品牌 / 营销工程化的脑图
│   ├── PipelineSidebar.tsx        # 工程化 Tab 的右侧 Pipeline
│   ├── BrandPortfolio.tsx         # 1.6 品牌矩阵主内容
│   ├── BrandPortfolioSidebar.tsx  # 1.6 Tab 的右侧索引
│   ├── RulesPriority.tsx          # 03 规范权重决策表主内容
│   └── RulesPrioritySidebar.tsx   # 03 Tab 的右侧图例与仲裁链路
├── data/
│   ├── plan-types.ts
│   ├── brand-plan.ts              # 品牌工程化规划数据
│   ├── marketing-plan.ts          # 营销工程化规划数据
│   ├── brand-portfolio.ts         # 7 个子品牌二级模板数据
│   ├── rules-priority.ts          # 规范权重决策矩阵数据
│   └── pipeline-diagrams.ts       # Mermaid 双防线流程图
├── App.tsx
├── main.tsx
└── index.css                      # 浅底深字工业极简主题
```

## 开发命令

```bash
npm install      # 安装依赖
npm run dev      # 本地开发
npm run build    # 生产构建
npm run preview  # 预览生产构建
```

---

## 扩展指南

### 新增一个子品牌

只需要编辑 `src/data/brand-portfolio.ts` 中的 `subBrands` 数组，按现有条目格式追加一项即可，看板会自动展示。

### 修改规范权重

编辑 `src/data/rules-priority.ts` 中的 `scenarios` 数组。每个场景包含 6 个维度的优先级（brand / marketing / ui / sub-brand / blend），表格会自动渲染。

### 新增工程化里程碑

编辑 `src/data/brand-plan.ts` 或 `src/data/marketing-plan.ts` 中的 `milestones` 数组。

---

## 视觉风格约定

整站采用「**浅底深字工业极简**」风格：

- 页面底色 `bg-slate-50`，卡片 `bg-white` + `border-slate-200/60` + `shadow-sm`
- 主色仅保留**墨黑** (`slate-900`) 作为强调，**琥珀色** (`amber-500`) 仅用于审核态左边线提示
- 抛弃渐变、玻璃拟物、发光特效，全部依赖几何线条与精细字号划分层级
- Hover / Active 状态统一使用 `hover:bg-slate-50` / `bg-slate-100` 的轻量过渡
