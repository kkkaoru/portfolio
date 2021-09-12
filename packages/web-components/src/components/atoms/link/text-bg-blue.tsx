import { LinkTextProps } from './types';

export function LinkTextBgBlue({
  text,
  target = '_blank',
  rel = 'noopener',
  ...linkProps
}: LinkTextProps): JSX.Element {
  return (
    <a
      {...linkProps}
      target={target}
      rel={rel}
      className="inline-block font-sans text-base font-bold leading-none border-0 cursor-pointer rounded-[3em] py-[11px] px-[20px] text-[#fff] bg-[#1ea7fd]"
    >
      {text}
    </a>
  );
}
