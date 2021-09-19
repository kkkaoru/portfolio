import { ImgHTMLAttributes } from '@reach/router/node_modules/@types/react';
import { DetailedHTMLProps } from 'react';

export type LogoProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export function LogoImgWithSvg({ ...props }: LogoProps): JSX.Element {
  return <img src={props.src} alt={props.alt} className="w-full h-6" {...props} />;
}
