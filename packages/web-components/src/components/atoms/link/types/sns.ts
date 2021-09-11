import { LinkIncludedChildrenProps } from '../link-included-children';

export type SnsLinkProps = {
  id: string;
  ariaLabel?: string;
} & Omit<LinkIncludedChildrenProps, 'href' | 'children' | 'ariaLabel'>;
