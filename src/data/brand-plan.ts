import {
  Atom,
  Ban,
  Box,
  Cpu,
  Flag,
  FlaskConical,
  GitBranch,
  Layers,
  Maximize2,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Wand2,
} from 'lucide-react'
import type { EngineeringPlan } from './plan-types'

export const brandPlan: EngineeringPlan = {
  id: 'brand',
  tabLabel: '品牌设计工程化',
  engineName: 'Brand AI Engine',
  goal: '将主观的 Brand Guideline 转化为客观的 Brand Code，实现品牌确定性的规模化分发',
  layers: [
    {
      id: 'atomic',
      label: '原子层',
      title: 'Asset & Style',
      subtitle: '品牌视觉原子与风格基因',
      icon: Sparkles,
      items: [
        {
          title: '品牌视觉资产向量化',
          description:
            '吉祥物、核心 Icon、3D 材质参数（玻璃拟物感、工业线条）',
        },
        {
          title: '色彩空间与字体规范',
          description: '提炼专属色彩十六进制范围与品牌定制字体特征',
        },
      ],
    },
    {
      id: 'rules',
      label: '规则层',
      title: 'Layout & Logic',
      subtitle: '超级符号与版式约束',
      icon: Layers,
      items: [
        {
          title: '品牌超级符号（Visual Hammer）',
          description: '数学特征与轮廓控制约束',
        },
        {
          title: '多媒介版式骨架（Grid System）',
          description: '核心信息对比度规范',
        },
      ],
    },
    {
      id: 'strategy',
      label: '策略层',
      title: 'Context & Prompt',
      subtitle: '心智调性与 AI 参数矩阵',
      icon: Target,
      items: [
        {
          title: '视觉情绪调性矩阵',
          description:
            '定义「年轻科技」「高端沉思」等不同心智在 AI 中的参数权重',
        },
      ],
    },
  ],
  pipelineStages: [
    {
      id: 'finetune',
      title: '基础模型层 · Fine-tuning',
      icon: FlaskConical,
      items: [
        {
          title: '资产训练',
          description:
            '使用 Flux / SDXL 训练团队专属品牌资产 LoRA / IP-Adapter 矩阵',
        },
        {
          title: '负向控制',
          description:
            '提取高频「非品牌 DNA」视觉特征，建立专属 Negative Prompt 库',
        },
      ],
    },
    {
      id: 'comfy',
      title: '自动化生成层 · ComfyUI Workflow',
      icon: Workflow,
      items: [
        {
          title: '结构控制',
          description:
            '引入 ControlNet，以超级符号几何剪影作为生成底图',
        },
        {
          title: '语义翻译',
          description:
            '专属 LLM Agent 将运营口语自动翻译为「品牌美学 Prompt」',
        },
      ],
    },
    {
      id: 'output',
      title: '交付超分层 · Output',
      icon: Maximize2,
      items: [
        {
          title: '无损放大交付',
          description:
            '接入 SD Ultimate SD Upscale，一键生成符合印刷 / 4K 大屏品牌 KV',
        },
      ],
    },
  ],
  milestones: [
    {
      id: 'm1',
      phase: 'M1',
      period: '1–2 月',
      title: '场景量化与首批 LoRA',
      description:
        '梳理 2 个最高频品牌场景，量化 AI Token，完成首批品牌 LoRA 训练',
      icon: Flag,
    },
    {
      id: 'm2',
      phase: 'M2',
      period: '3–4 月',
      title: '符号约束工作流节点化',
      description:
        '在 ComfyUI 跑通「符号约束 + 光影混合」工作流，由 AI 工作流设计师节点化封装',
      icon: GitBranch,
    },
    {
      id: 'm3',
      phase: 'M3',
      period: '5 月+',
      title: '品牌画布平台化',
      description:
        '向运营端开放「文本直出 80 分品牌 KV」的自助服务',
      icon: Rocket,
    },
  ],
  auditGates: [
    {
      id: 'brand-dna',
      title: '第一道防线 · 品牌 DNA 合规审核',
      description: '生成物与 Brand Code 向量空间对齐度校验',
      checks: ['LoRA 权重合规', '负向词库命中拦截', '超级符号轮廓偏差'],
    },
    {
      id: 'brand-qc',
      title: '第二道防线 · 交付质量与印刷审核',
      description: '超分输出与媒介规格终检',
      checks: ['4K/印刷 DPI 达标', '色彩 ΔE 品牌区间', 'KV 版式栅格合规'],
    },
  ],
}

export const brandPipelineIcons = {
  finetune: Cpu,
  comfy: Wand2,
  output: Box,
  audit: ShieldCheck,
  atomic: Atom,
  rules: Palette,
  strategy: Target,
  ban: Ban,
}
