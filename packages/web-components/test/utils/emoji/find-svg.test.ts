import { mockEmojiThumbsUp } from '@mocks/emoji/thumbsUp';
import { findSvgUrlInTwemoji } from '@web-components/utils/emoji/find-svg';

describe('find svg', () => {
  it('should be thumbs up svg url', () => {
    expect(findSvgUrlInTwemoji(mockEmojiThumbsUp)).toBe('https://twemoji.maxcdn.com/v/latest/svg/1f44d.svg');
  });
  it('should be undefined', () => {
    // Empty string
    expect(findSvgUrlInTwemoji('')).toBeUndefined();
    expect(findSvgUrlInTwemoji('not emoji text')).toBeUndefined();
    expect(findSvgUrlInTwemoji(mockEmojiThumbsUp + mockEmojiThumbsUp)).toBeUndefined();
  });
});
