import { render } from '@testing-library/react';
import Home from '@/pages/index';

jest.mock('@web/components/src/utils/emoji/hooks');
// import { useRandomEmoji } from '@web/components/src/utils/emoji/hooks';

describe('Top page', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<Home overwriteEmoji="https://twemoji.maxcdn.com/v/latest/svg/1f44d.svg'" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
