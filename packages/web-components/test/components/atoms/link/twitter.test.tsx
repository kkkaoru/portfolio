import { render } from '@testing-library/react';
import { TwitterLink } from '@web-components/components/atoms/link';

describe('twitter link', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<TwitterLink id="TwitterJp" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
