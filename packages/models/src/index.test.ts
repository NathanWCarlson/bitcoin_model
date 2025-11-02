import { describe, expect, it } from 'vitest';
import { defaultGrowthScenarios, getScenarioById } from './index';

describe('growth scenarios', () => {
  it('includes the baseline scenario', () => {
    const scenario = getScenarioById('baseline');
    expect(scenario).toBeDefined();
    expect(scenario?.name).toBe('Baseline Adoption');
  });

  it('exposes all scenarios via the default export', () => {
    expect(defaultGrowthScenarios.length).toBeGreaterThan(0);
  });
});
