import { LogoImgWithSvg, LogoProps } from '@web-components/components/atoms/logo';

export type HeaderProps = {
  emoji: string;
} & LogoProps;

export function Header({ emoji, ...props }: HeaderProps): JSX.Element {
  return (
    <header className="pt-4">
      <LogoImgWithSvg src={emoji} alt="header logo" {...props} />
    </header>
  );
}
