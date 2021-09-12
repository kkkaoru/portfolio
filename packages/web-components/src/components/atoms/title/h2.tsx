import { TitleProps } from './types';

export function H2({ title }: TitleProps): JSX.Element {
  return <h2 className="flex justify-center font-serif text-2xl font-bold tracking-widest">{title}</h2>;
}
