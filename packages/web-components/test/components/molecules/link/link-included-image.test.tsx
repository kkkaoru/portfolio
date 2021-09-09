import { render } from '@testing-library/react';
import type { LinkAndImageProps } from '@web-components/components/atoms/link';
import { ListLinkIncludedImage } from '@web-components/components/molecules/link/list/';

const ListProps: LinkAndImageProps[] = [
  {
    href: 'https://twitter.com/TwitterJP',
    src: '@web-components/assets/brand/twitter/blue.svg',
    alt: 'Twitter',
  },
  {
    href: 'https://github.com/github',
    src: '@web-components/assets/brand/github/black.svg',
    alt: 'GitHub',
    isReversedAnimation: true,
  },
];

describe('ListLinkIncludedImage', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<ListLinkIncludedImage list={ListProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
