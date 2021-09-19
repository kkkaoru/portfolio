import { LogoImgWithSvg, LogoProps } from '@web-components/components/atoms/logo';
import { useRandomEmoji } from '@web-components/utils/emoji/hooks';

export function Header({ ...props }: LogoProps): JSX.Element {
  const emoji = useRandomEmoji();
  return (
    <header className="pt-4">
      <LogoImgWithSvg src={emoji} alt="header logo" {...props} />
    </header>
  );
}
