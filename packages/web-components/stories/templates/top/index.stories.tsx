import type { Story } from '@storybook/react';
import { Top } from '@web-components/components/templates/top';
import { generateStoryMeta } from '@stories/utils/meta';
import { ComponentType } from 'react';

export default generateStoryMeta(import.meta.url, Top as ComponentType);

export const Default: Story = () => (
  <Top
    twitterId="TwitterJP"
    githubId="github"
    ImageComponent={(args) => (
      <img src="http://placekitten.com/400/400" alt="Cat" width="400" height="400" decoding="async" {...args} />
    )}
  />
);
