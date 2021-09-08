import { render } from '@testing-library/react';
import { LinkIncludedImage } from '@web-components/components/atoms/link';

describe('example', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(
      <LinkIncludedImage
        href="https://twitter.com/TwitterJP"
        src="@web-components/assets/brand/github/black.svg"
        alt="Twitter"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
