import { generateRandomInterval } from '@web-components/utils/emoji/interval';

describe('generate random number for interval', () => {
  it('should be randomized number', () => {
    expect(generateRandomInterval(0, 2)).toBeGreaterThanOrEqual(0);
    expect(generateRandomInterval(0, 2)).toBeLessThanOrEqual(2);
    expect(generateRandomInterval(0, 2)).toBeGreaterThanOrEqual(0);
    expect(generateRandomInterval(0, 2)).toBeLessThanOrEqual(2);
    expect(generateRandomInterval(0, 2)).toBeGreaterThanOrEqual(0);
    expect(generateRandomInterval(0, 2)).toBeLessThanOrEqual(2);
  });
});
