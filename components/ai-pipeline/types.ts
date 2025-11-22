import { LucideIcon } from 'lucide-react';

export interface PipelineStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  icon: LucideIcon;
}
