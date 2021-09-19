import { Story, Meta } from '@storybook/react';
import { LogoImgWithSvg } from '@web-components/components/atoms/logo';
import { generateTitleByImportMetaUrl } from '@stories/utils/title';
import { mockEmojiThumbsUpSvgUrl } from '@mocks/emoji/thumbs-up';
import { useRandomEmoji } from '@web-components/utils/emoji/hooks';

export default {
  title: generateTitleByImportMetaUrl(import.meta.url),
  component: LogoImgWithSvg,
} as Meta;

export const ThumbsUp: Story = () => <LogoImgWithSvg alt="thumbs up" src={mockEmojiThumbsUpSvgUrl} />;
export const Random: Story = () => {
  const emoji = useRandomEmoji();
  return <LogoImgWithSvg alt="thumbs up" src={emoji} />;
};
