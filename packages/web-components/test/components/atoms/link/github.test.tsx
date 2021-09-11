import { render } from '@testing-library/react';
import { GitHubLink } from '@web-components/components/atoms/link';

describe('github link', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<GitHubLink id="TwitterJp" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
