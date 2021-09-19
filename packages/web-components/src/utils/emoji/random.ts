import { random } from 'node-emoji';
import { searchSvgInTwemoji } from './search';

export function findRandomEmoji(): string {
  const searched = searchSvgInTwemoji(random().emoji);
  if (searched !== undefined) {
    return searched;
  }
  return findRandomEmoji();
}
