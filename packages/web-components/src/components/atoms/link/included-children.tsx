export type LinkIncludedChildrenProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  isReversedAnimation?: boolean;
  target?: string;
  rel?: string;
};

export function LinkIncludedChildren({
  href,
  ariaLabel,
  children,
  isReversedAnimation = false,
  target = '_blank',
  rel = 'noopener',
}: LinkIncludedChildrenProps): JSX.Element {
  const animation = isReversedAnimation ? 'animate-down-up-down' : 'animate-up-down-up';
  return (
    <a href={href} target={target} rel={rel} className={`${animation} block w-16`} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
