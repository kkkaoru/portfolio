import { Story } from '@storybook/react';
import { TextWithUnderline, Props } from '@web-components/components/atoms/text';
import { generateTitleByImportMetaUrl } from '@stories/utils/title';

export default {
  title: generateTitleByImportMetaUrl(import.meta.url),
  component: TextWithUnderline,
};

const Template: Story<Props> = (args) => <TextWithUnderline {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  text: 'Text with underline',
};
