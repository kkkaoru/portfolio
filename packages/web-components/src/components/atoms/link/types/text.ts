import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export type LinkTextProps = {
  text: string;
  href: string;
  target?: string;
  rel?: string;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
