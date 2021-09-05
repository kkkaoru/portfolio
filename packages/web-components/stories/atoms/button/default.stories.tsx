import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { DefaultButton, Props } from '@web-components/components/atoms/button/default';

export default {
  title: 'button/DefaultButton',
  component: DefaultButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <DefaultButton onClick={action('button-click')} {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
