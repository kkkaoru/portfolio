import { renderHook } from '@testing-library/react-hooks';
import { useRandomEmoji } from '@web-components/utils/emoji/hooks';

describe('random emoji hooks', () => {
  it('should be return emoji url', () => {
    const { result } = renderHook(() => useRandomEmoji());
    expect(result.current).toMatch(new RegExp('^https://twemoji.maxcdn.com/v/latest/svg/.*?.svg'));
  });
  it('should be changed emoji url', async () => {
    const { result, waitForValueToChange, unmount } = renderHook(() => useRandomEmoji(0));
    const initializedEmoji = String(result.current);
    await waitForValueToChange(() => result.current);
    unmount();
    expect(result.current).not.toBe(initializedEmoji);
  });
});
