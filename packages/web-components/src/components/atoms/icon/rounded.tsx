type RoundedIconProps = {
  ImageComponent: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
};

export function RoundedIcon({ ImageComponent }: RoundedIconProps): JSX.Element {
  return (
    <p className="grid place-items-center">
      <ImageComponent className="max-w-full rounded-full md:max-w-md drop-shadow-md" />
    </p>
  );
}
