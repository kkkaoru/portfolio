import { findRandomEmoji } from '@web-components/utils/emoji/random';

describe('find svg', () => {
  it('should be included svg url', () => {
    expect(findRandomEmoji()).toMatch(new RegExp('^https://twemoji.maxcdn.com/v/latest/svg/.*?.svg'));
  });
});
