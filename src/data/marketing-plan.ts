import {
  Code2,
  Crop,
  Expand,
  Flag,
  LayoutTemplate,
  Grid3x3,
  Image,
  LayoutGrid,
  Megaphone,
  Rocket,
  Scan,
  Sparkles,
  Sun,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import type { EngineeringPlan } from './plan-types'

export const marketingPlan: EngineeringPlan = {
  id: 'marketing',
  tabLabel: '营销设计工程化',
  engineName: 'Marketing Automation',
  goal: '沉淀营销原子级组件，用「AI 生图 + 代码排版」混合流实现营销物料的高并发与高转化',
  layers: [
    {
      id: 'atomic',
      label: '原子层',
      title: 'Asset & Style',
      subtitle: '营销组件与设计 Token',
      icon: Sparkles,
      items: [
        {
          title: '营销组件代码化',
          description: '优惠券标签、大促氛围框、弹窗动效（Lottie）',
        },
        {
          title: '设计资产 Token 化',
          description: 'Figma 变体（Variants）、间距、圆角等参数',
        },
      ],
    },
    {
      id: 'rules',
      label: '规则层',
      title: 'Layout & Logic',
      subtitle: '智能排版与对比度算法',
      icon: Grid3x3,
      items: [
        {
          title: '智能排版引擎规则',
          description: '若标题 > 6 字，自动切换为双行流式布局',
        },
        {
          title: '视觉安全对比度',
          description:
            '主商品图与背景对比度动态算法（ΔE < 20 时自动暗化背景）',
        },
      ],
    },
    {
      id: 'strategy',
      label: '策略层',
      title: 'Context & Prompt',
      subtitle: '场景人群与氛围模板',
      icon: Target,
      items: [
        {
          title: '场景 / 人群匹配',
          description:
            '不同商品品类（数码 vs 美妆）与目标人群的营销氛围模板库',
        },
      ],
    },
  ],
  pipelineStages: [
    {
      id: 'asset',
      title: '商品图像智能处理 · Asset Processing',
      icon: Scan,
      items: [
        {
          title: '自动抠图',
          description:
            '集成 Segment Anything (SAM)，实现商品主体秒级分离',
        },
        {
          title: '智能重光照',
          description:
            '引入 IC-Light，根据背景色温自动计算商品投影与高光',
        },
      ],
    },
    {
      id: 'resize',
      title: '矩阵式延展适配 · Resizing Agent',
      icon: Expand,
      items: [
        {
          title: '多尺寸重排',
          description:
            '输入 3:4 主图，Agent 按渠道（1:1、16:9）栅格规范动态重排',
        },
        {
          title: '智能补全',
          description: '边缘 Outpainting 局部回绘，实现无缝画布延展',
        },
      ],
    },
    {
      id: 'template',
      title: '模板驱动引擎 · Figma to Code',
      icon: Code2,
      items: [
        {
          title: 'Figma API / Stitch AI 注入',
          description:
            '代码化描述注入模板，动态渲染营销 Banner',
        },
      ],
    },
  ],
  milestones: [
    {
      id: 'm1',
      phase: 'M1',
      period: '1–2 月',
      title: '大促套版与 Design Tokens',
      description:
        '梳理大促 Banner 套版规范，打通 Figma 模板组件 Design Tokens',
      icon: Flag,
    },
    {
      id: 'm2',
      phase: 'M2',
      period: '3–4 月',
      title: '抠图-重光照-合成 ComfyUI 流',
      description:
        '攻克营销 ComfyUI 流，解决 AI 合成图「假」的问题',
      icon: Image,
    },
    {
      id: 'm3',
      phase: 'M3',
      period: '5 月+',
      title: '全渠道营销矩阵一键并发',
      description:
        '集成内部 AI 平台，一键并发全渠道多尺寸，彻底释放改尺寸人力',
      icon: Rocket,
    },
  ],
  auditGates: [
    {
      id: 'visual-auth',
      title: '第一道防线 · 视觉真伪与合成审核',
      description: '商品边缘、光影与背景物理一致性校验',
      checks: ['SAM 抠图边缘质量', 'IC-Light 光影合理性', '合成接缝检测'],
    },
    {
      id: 'channel-spec',
      title: '第二道防线 · 渠道规格与转化审核',
      description: '多尺寸矩阵与排版规则终检',
      checks: ['渠道宽高比合规', '标题字数排版规则', '对比度 ΔE 安全阈值'],
    },
  ],
}

export const marketingPipelineIcons = {
  asset: Crop,
  resize: LayoutGrid,
  template: LayoutTemplate,
  strategy: Users,
  rules: Zap,
  megaphone: Megaphone,
  sun: Sun,
}
