import { TitleProps } from './types';

export function H2({
  title,
  fontSize = 'text-2xl',
  fontWeight = 'font-bold',
  fontStyle = 'not-italic',
}: TitleProps): JSX.Element {
  return (
    <h2 className={`flex justify-center font-serif ${fontSize} ${fontWeight} ${fontStyle} tracking-widest`}>{title}</h2>
  );
}
