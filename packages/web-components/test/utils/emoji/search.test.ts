import { mockEmojiThumbsUp } from '@mocks/emoji/thumbsUp';
import { searchSvgInTwemoji } from '@web-components/utils/emoji/search';

describe('find svg', () => {
  it('should be thumbs up svg url', () => {
    expect(searchSvgInTwemoji(mockEmojiThumbsUp)).toBe('https://twemoji.maxcdn.com/v/latest/svg/1f44d.svg');
  });
  it('should be undefined', () => {
    // Empty string
    expect(searchSvgInTwemoji('')).toBeUndefined();
    expect(searchSvgInTwemoji('not emoji text')).toBeUndefined();
    expect(searchSvgInTwemoji(mockEmojiThumbsUp + mockEmojiThumbsUp)).toBeUndefined();
  });
});
