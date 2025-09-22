// lib/types.ts
export interface GhgEmission {
  yearMonth: string; // e.g., "2025-01"
  source?: string; // optional: gasoline, diesel, etc
  emissions: number; // tons of CO2
}

export interface Company {
  id: string;
  name: string;
  country: string;
  emissions: GhgEmission[];
  totalEmissions: number;
  avgMonthly: number;
  latestReport: string;
}
