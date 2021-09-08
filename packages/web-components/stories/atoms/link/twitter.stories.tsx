import { Story } from '@storybook/react';
import { LinkAndImageProps, LinkIncludedImage } from '@web-components/components/atoms/link';
import TwitterIcon from '@web-components/assets/brand/twitter/blue.svg';
import GitHubIcon from '@web-components/assets/brand/github/black.svg';

export default {
  title: 'link/LinkIncludedImage',
  component: LinkIncludedImage,
};

export const Twitter: Story<LinkAndImageProps> = () => (
  <LinkIncludedImage href="https://twitter.com/TwitterJP" src={TwitterIcon} alt="Twitter" />
);

export const GitHub: Story<LinkAndImageProps> = () => (
  <LinkIncludedImage href="https://github.com/github" src={GitHubIcon} alt="GitHub" isReversedAnimation />
);
