type RoundedIconProps = {
  ImageComponent: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
};

export function RoundedIcon({ ImageComponent }: RoundedIconProps): JSX.Element {
  return (
    <p className="px-4 grid place-items-center">
      <ImageComponent className="max-w-full rounded-full md:max-w-md drop-shadow-md" />
    </p>
  );
}
