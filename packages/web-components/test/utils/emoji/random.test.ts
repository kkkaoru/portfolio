import { findRandomEmoji } from '@web-components/utils/emoji/random';
import { mockEmojiThumbsUpSvgUrl } from '@mocks/emoji/thumbs-up';

describe('find svg', () => {
  it('should be included svg url', () => {
    expect(findRandomEmoji()).toMatch(new RegExp('^https://twemoji.maxcdn.com/v/latest/svg/.*?.svg'));
  });
  it('should be different random url from argument url', () => {
    const randomizedEmoji = findRandomEmoji(mockEmojiThumbsUpSvgUrl);
    expect(randomizedEmoji).not.toBe(mockEmojiThumbsUpSvgUrl);
    expect(randomizedEmoji).toMatch(new RegExp('^https://twemoji.maxcdn.com/v/latest/svg/.*?.svg'));
  });
});
