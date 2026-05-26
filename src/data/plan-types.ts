import type { LucideIcon } from 'lucide-react'

export type PlanItem = {
  title: string
  description: string
}

export type PlanLayer = {
  id: 'atomic' | 'rules' | 'strategy'
  label: string
  title: string
  subtitle: string
  icon: LucideIcon
  items: PlanItem[]
}

export type PipelineStage = {
  id: string
  title: string
  icon: LucideIcon
  items: PlanItem[]
}

export type Milestone = {
  id: 'm1' | 'm2' | 'm3'
  phase: string
  period: string
  title: string
  description: string
  icon: LucideIcon
}

export type AuditGate = {
  id: string
  title: string
  description: string
  checks: string[]
}

export type EngineeringPlan = {
  id: 'brand' | 'marketing'
  tabLabel: string
  engineName: string
  goal: string
  layers: PlanLayer[]
  pipelineStages: PipelineStage[]
  milestones: Milestone[]
  auditGates: [AuditGate, AuditGate]
}
