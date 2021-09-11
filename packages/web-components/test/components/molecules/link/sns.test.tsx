import { render } from '@testing-library/react';
import { ListSnSLinks } from '@web-components/components/molecules/link/list/';

describe('ListLinkIncludedImage', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<ListSnSLinks twitterId="TwitterJP" githubId="github" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
