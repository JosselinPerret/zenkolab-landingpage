export enum PipelineStage {
  IDLE = 'IDLE',
  CENTER_VISIT = 'CENTER_VISIT',
  MEASUREMENTS = 'MEASUREMENTS',
  DATA_TRANSFER = 'DATA_TRANSFER',
  AI_ANALYSIS = 'AI_ANALYSIS',
  RISK_ALERT = 'RISK_ALERT',
  CARE_TAKEN = 'CARE_TAKEN',
  COMPLETE = 'COMPLETE'
}

export interface SimulationConfig {
  isHighRisk: boolean;
}
