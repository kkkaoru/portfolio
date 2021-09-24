import type { Story } from '@storybook/react';
import { Top } from '@web-components/components/templates/top';
import { generateStoryMeta } from '@stories/utils/meta';
import { ComponentType } from 'react';
import { mockEmojiThumbsUpSvgUrl } from '@mocks/emoji/thumbs-up';

export default generateStoryMeta(import.meta.url, Top as ComponentType);

export const Default: Story = () => (
  <Top
    twitterId="TwitterJP"
    githubId="github"
    repositoryLink="#"
    contactLink="#"
    footerText="copyright"
    emoji={mockEmojiThumbsUpSvgUrl}
    ImageComponent={(args) => (
      <img src="http://placekitten.com/800/800" alt="Cat" width="400" height="400" decoding="async" {...args} />
    )}
  />
);
