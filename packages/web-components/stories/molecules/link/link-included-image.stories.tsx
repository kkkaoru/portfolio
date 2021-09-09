import type { Story } from '@storybook/react';
import type { LinkAndImageProps } from '@web-components/components/atoms/link';
import { ListLinkIncludedImage } from '@web-components/components/molecules/link/list/';
import TwitterIcon from '@web-components/assets/brand/twitter/blue.svg';
import GitHubIcon from '@web-components/assets/brand/github/black.svg';
import { generateTitleByImportMetaUrl } from '@stories/utils/title';

export default {
  title: generateTitleByImportMetaUrl(import.meta.url),
  component: ListLinkIncludedImage,
};

const ListProps: LinkAndImageProps[] = [
  {
    href: 'https://twitter.com/TwitterJP',
    src: TwitterIcon,
    alt: 'Twitter',
  },
  {
    href: 'https://github.com/github',
    src: GitHubIcon,
    alt: 'GitHub',
    isReversedAnimation: true,
  },
];

export const List: Story = () => <ListLinkIncludedImage list={ListProps} />;
