import { Story, Meta } from '@storybook/react';
import { TwitterLink } from '@web-components/components/atoms/link';
import { generateTitleByImportMetaUrl } from '@stories/utils/title';

export default {
  title: generateTitleByImportMetaUrl(import.meta.url),
  component: TwitterLink,
} as Meta;

export const Twitter: Story = () => <TwitterLink id="TwitterJP" />;
