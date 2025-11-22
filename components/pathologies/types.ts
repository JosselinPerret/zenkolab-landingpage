import React from 'react';

export interface Pathology {
  id: string;
  title: string;
  shortDescription: string;
  details: string;
  icon: React.ReactNode;
  color: string;
}
