export type LinkAndImageProps = {
  href: string;
  src: string;
  alt: string;
  isReversedAnimation?: boolean;
  width?: number;
  height?: number;
  target?: string;
  rel?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'auto' | 'sync';
};

export function LinkIncludedImage({
  href,
  src,
  alt,
  width = 128,
  height = 128,
  isReversedAnimation = false,
  target = '_blank',
  rel = 'noopener',
  loading = 'lazy',
  decoding = 'async',
}: LinkAndImageProps): JSX.Element {
  const animation = isReversedAnimation ? 'animate-down-up-down' : 'animate-up-down-up';
  return (
    <a href={href} target={target} rel={rel}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        className={`${animation} hover:animation-paused`}
      />
    </a>
  );
}
