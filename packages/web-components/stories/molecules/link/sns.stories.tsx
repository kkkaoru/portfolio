import type { Story, Meta } from '@storybook/react';
import { ListSnSLinks } from '@web-components/components/molecules/link/list/';
import { generateTitleByImportMetaUrl } from '@stories/utils/title';

export default {
  title: generateTitleByImportMetaUrl(import.meta.url),
  component: ListSnSLinks,
} as Meta;

export const SnsList: Story = () => <ListSnSLinks twitterId="TwitterJP" githubId="github" />;
