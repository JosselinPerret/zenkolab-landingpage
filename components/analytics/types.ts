export interface PathologyData {
  id: string;
  name: string;
  description: string;
  detailedAnalysis: string;
  metrics: {
    sensitivity: number;
    specificity: number;
    auc: number;
  };
  humanMetrics: {
    sensitivity: number;
    specificity: number;
  };
}

export interface MetricDefinition {
  term: string;
  simpleDefinition: string;
  technicalDefinition: string;
}
