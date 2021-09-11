import { Story, Meta } from '@storybook/react';
import { GitHubLink } from '@web-components/components/atoms/link';
import { generateTitleByImportMetaUrl } from '@stories/utils/title';

export default {
  title: generateTitleByImportMetaUrl(import.meta.url),
  component: GitHubLink,
} as Meta;

export const GitHub: Story = () => <GitHubLink id="github" />;
