# 品牌与营销设计工程化 · 执行规划站点

UED 团队用于网页化展示「品牌与营销设计工程化」执行规划的前端项目。

## 技术栈

- [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite`）
- [Lucide React](https://lucide.dev/) — 图标
- [Mermaid](https://mermaid.js.org/) — 流程图 / 架构图渲染（含 `@braintree/sanitize-url` 安全依赖）

## 目录结构

```
src/
├── components/       # 可复用组件（含 MermaidDiagram）
├── data/             # 规划数据、Mermaid 图表定义
├── layouts/          # 页面布局（按需扩展）
├── App.tsx           # 应用入口页面
├── main.tsx
└── index.css         # Tailwind 与全局样式
```

## 开发

```bash
npm install
npm run dev
```

浏览器访问终端提示的本地地址（通常为 http://localhost:5173）。

## 构建与预览

```bash
npm run build
npm run preview
```

## 添加流程图

在 `src/data/` 中定义 Mermaid 字符串，在页面中使用：

```tsx
import { MermaidDiagram } from './components'

<MermaidDiagram chart={`flowchart TD\n  A --> B`} />
```
