type RoundedIconProps = {
  ImageComponent: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
};

export function RoundedIcon({ ImageComponent }: RoundedIconProps): JSX.Element {
  return (
    <p className="grid place-items-center">
      <ImageComponent className="max-w-xs rounded-full drop-shadow-md" />
    </p>
  );
}
