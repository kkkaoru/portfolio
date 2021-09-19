import { random } from 'node-emoji';
import { searchSvgInTwemoji } from './search';

export function findRandomEmoji(previous?: string): string {
  const searched = searchSvgInTwemoji(random().emoji);
  if (searched !== undefined && previous !== searched) {
    return searched;
  }
  return findRandomEmoji(previous);
}
