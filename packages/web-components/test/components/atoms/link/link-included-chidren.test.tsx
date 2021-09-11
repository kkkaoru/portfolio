import { render } from '@testing-library/react';
import { LinkIncludedChildren } from '@web-components/components/atoms/link';

describe('link included children', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(
      <LinkIncludedChildren href="https://twitter.com/TwitterJP" ariaLabel="Twitter">
        <div />
      </LinkIncludedChildren>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
