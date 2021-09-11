import type { Story } from '@storybook/react';
import { Top } from '@web-components/components/templates/top';
import { generateStoryMeta } from '@stories/utils/meta';

export default generateStoryMeta(import.meta.url, Top);

export const Default: Story = () => <Top />;
