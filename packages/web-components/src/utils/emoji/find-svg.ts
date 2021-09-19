/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
// This disable is depends on twemoji-parser
import { parse, EmojiEntity } from 'twemoji-parser';

export function findSvgUrlInTwemoji(emoji: string): string | undefined {
  // This disable is depends on twemoji-parser
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const parsedEntities = parse(emoji);
  // Not found emoji or emoji is not a single emoji
  if (parsedEntities.length === 0 || emoji.length !== 2) {
    return undefined;
  }
  const foundedEntity: EmojiEntity | undefined = parsedEntities.find((entity: EmojiEntity) => entity.text === emoji);
  if (foundedEntity === undefined) {
    return undefined;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return foundedEntity?.url;
}
