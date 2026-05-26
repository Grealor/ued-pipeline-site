# Airbnb 风格参考 · airbnb_style.md

> **参考来源**：[VoltAgent / awesome-design-md · airbnb / DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/airbnb/DESIGN.md)
>
> 本文档为本项目落地参考。下方表格中的 Token 数值取自原文（事实数据）；说明文字为本项目按落地需要重写，完整原文请见上方链接。

## 设计基调（摘要）

Airbnb 的设计语言是「**温暖、慷慨、以摄影驱动的消费市场**」：底色纯白，唯一品牌主色 **Rausch (#ff385c)** 极克制使用（仅 CTA、搜索按钮球、收藏心型与品牌标识）。字体使用变体字 Airbnb Cereal VF，权重保持中等（500–600）而非粗重的 700+，让摄影与留白承担视觉重量。形态偏柔软：按钮 8px、卡片 14px、搜索栏完全胶囊化。整个系统只有 95% 平面 + 一层悬浮阴影，几乎没有渐变与发光。

## 色板 Tokens

### 品牌色
| Token | Hex | 用途 |
|---|---|---|
| `primary` (Rausch) | `#ff385c` | 主 CTA / 搜索球 / 收藏激活 / 内联品牌链接 |
| `primary-active` | `#e00b41` | Rausch 按下态 |
| `primary-disabled` | `#ffd1da` | Rausch 禁用态 |
| `luxe` | `#460479` | 子品牌 Luxe 专属（不在主品牌使用） |
| `plus` | `#92174d` | 子品牌 Plus 专属（不在主品牌使用） |

### 文本与表面
| Token | Hex | 用途 |
|---|---|---|
| `ink` | `#222222` | 主文本（标题 / 正文 / 主链接） |
| `body` | `#3f3f3f` | 长文本的次级正文 |
| `muted` | `#6a6a6a` | 副标题 / 不活跃 Tab / 页脚副标签 |
| `muted-soft` | `#929292` | 禁用链接 |
| `canvas` | `#ffffff` | 默认页面底色 |
| `surface-soft` | `#f7f7f7` | 最浅填充 |
| `surface-strong` | `#f2f2f2` | 圆形图标按钮底 |

### 边线
| Token | Hex | 用途 |
|---|---|---|
| `hairline` | `#dddddd` | 默认 1px 发丝边 |
| `hairline-soft` | `#ebebeb` | 长滚动编辑性分割 |
| `border-strong` | `#c1c1c1` | 描边按钮 / focus 后输入框 |

### 语义
| Token | Hex | 用途 |
|---|---|---|
| `error` | `#c13515` | 表单校验错误文字 |
| `error-hover` | `#b32505` | 错误链接 hover |
| `legal-link` | `#428bff` | 法律条款内的内联链接 |
| `star-rating` | `#222222` | 星评图标与数字（同 ink，刻意不用金黄） |

## 字号与权重

| Token | Size | Weight | LH | Letter |
|---|---|---|---|---|
| `rating-display` | 64px | 700 | 1.10 | -1px |
| `display-xl` | 28px | 700 | 1.43 | 0 |
| `display-lg` | 22px | 500 | 1.18 | -0.44px |
| `display-md` | 21px | 700 | 1.43 | 0 |
| `display-sm` | 20px | 600 | 1.20 | -0.18px |
| `title-md` | 16px | 600 | 1.25 | 0 |
| `title-sm` | 16px | 500 | 1.25 | 0 |
| `body-md` | 16px | 400 | 1.50 | 0 |
| `body-sm` | 14px | 400 | 1.43 | 0 |
| `caption` | 14px | 500 | 1.29 | 0 |
| `caption-sm` | 13px | 400 | 1.23 | 0 |
| `badge` | 11px | 600 | 1.18 | 0 |
| `micro-label` | 12px | 700 | 1.33 | 0 |
| `uppercase-tag` | 8px | 700 | 1.25 | 0.32px ↑ |
| `button-md` | 16px | 500 | 1.25 | 0 |
| `button-sm` | 14px | 500 | 1.29 | 0 |
| `nav-link` | 16px | 600 | 1.25 | 0 |
| `link` | 14px | 400 | 1.43 | 0 |

**字重原则**：显示权重保持适度 — 主页 h1 仅 28px / 700，详情页 h1 仅 22px / 500。系统刻意让摄影与留白承担视觉权重，而不是用粗体字号霸占注意力。**全站唯一典型例外**是评分大数（`rating-display` 64px / 700），那是峰值信任信号，可以放声。

**字体回退**：`Airbnb Cereal VF, Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif`。若 Cereal / Circular 不可用，**Inter** 是最接近的开源替代（行高建议比 Cereal 紧 ~2%）。

## 圆角

| Token | Value | 用途 |
|---|---|---|
| `none` | 0 | 主体网格 |
| `xs` | 4px | 极小元素 |
| `sm` | 8px | 按钮 |
| `md` | 14px | 卡片 |
| `lg` | 20px | 大组件 |
| `xl` | 32px | 类目栏圆角 |
| `full` | 9999px | 搜索栏 / 头像 / 心型 / 圆形图标按钮 |

## 间距系统

基础 4px，微步 2px：

`xxs` 2 · `xs` 4 · `sm` 8 · `md` 12 · `base` 16 · `lg` 24 · `xl` 32 · `xxl` 48 · `section` 64

主要 section 用 `section`（64px）的垂直呼吸；卡片网格之间仅 `base`（16px），刻意做出"宽松 hero / 紧凑市集"的对比。

## 阴影

整个系统**只有一层**阴影 + 平面默认，95% 表面无阴影。

```css
box-shadow:
  rgba(0, 0, 0, 0.02) 0 0 0 1px,
  rgba(0, 0, 0, 0.04) 0 2px 6px 0,
  rgba(0, 0, 0, 0.10) 0 4px 8px 0;
```

用于：属性卡 hover / 搜索栏静止态 / 下拉菜单（账户、语言、日历）。深度靠摄影与白底叠白底的边线分离来塑造，不靠阴影层级。

## 在本项目的应用

| 项目元素 | Airbnb 化处理 |
|---|---|
| 页面底色 | `surface-soft` (#f7f7f7) — 比纯白稍冷一档，与卡片白底自然分离 |
| 卡片底 | `canvas` (#ffffff) + 1px `hairline` 边线，无阴影 |
| 卡片圆角 | `14px`（card 标准） |
| 文本主色 | `ink` (#222222) — 比 slate-900 更温暖 |
| 副文本 | `muted` (#6a6a6a) |
| 分割线 | `hairline-soft` (#ebebeb) |
| Header 品牌色块 | Rausch 实心方块 — 全站唯一的"品牌电压" |
| 状态点 | Rausch 小圆点（ACTIVE / 当前态） |
| 大标题字重 | `font-semibold` (600)，避免 700+ |
| Tab 切换 | 浅胶囊状，激活态用 ink 文字 + Rausch 下划线点缀 |
| 主要 CTA（未来需要时） | Rausch 实心填充 + `rounded-sm` (8px) |

> 与原项目「工业极简」基调的协调：保留了"白底深字 + 极简边线 + 单层阴影"的克制感，**仅在 Header 与激活态指示这种"品牌电压点位"引入 Rausch**，不破坏既有的信息密度与中性感。这是 Airbnb 系统本身的纪律 — Rausch 在主品牌里也是稀缺资源。

## Tailwind 落地映射

本项目通过 `src/index.css` 的 `@theme` 注入对应 token，组件直接使用：

| Tailwind 类 | CSS 变量 | 等价值 |
|---|---|---|
| `bg-canvas` | `--color-canvas` | `#ffffff` |
| `bg-surface-soft` | `--color-surface-soft` | `#f7f7f7` |
| `bg-surface-strong` | `--color-surface-strong` | `#f2f2f2` |
| `bg-rausch` | `--color-rausch` | `#ff385c` |
| `text-ink` | `--color-ink` | `#222222` |
| `text-body` | `--color-body` | `#3f3f3f` |
| `text-muted` | `--color-muted` | `#6a6a6a` |
| `border-hairline` | `--color-hairline` | `#dddddd` |
| `border-hairline-soft` | `--color-hairline-soft` | `#ebebeb` |
