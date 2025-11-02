export type GrowthScenario = {
  id: string;
  name: string;
  description: string;
  baseYear: number;
};

export const defaultGrowthScenarios: GrowthScenario[] = [
  {
    id: 'baseline',
    name: 'Baseline Adoption',
    description: 'Matches the conservative projections from the Bitcoin24 workbook.',
    baseYear: 2024
  }
];

export function getScenarioById(id: string): GrowthScenario | undefined {
  return defaultGrowthScenarios.find((scenario) => scenario.id === id);
}
