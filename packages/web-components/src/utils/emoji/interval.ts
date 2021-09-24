export function generateRandomInterval(min = 800, max = 2400): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
