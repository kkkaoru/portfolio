type RoundedIconProps = {
  ImageComponent: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
};

export function RoundedIcon({ ImageComponent }: RoundedIconProps): JSX.Element {
  return (
    <div className="px-4 grid place-items-center">
      <div className="rounded-full drop-shadow-md">
        <ImageComponent className="max-w-full rounded-full md:max-w-md" />
      </div>
    </div>
  );
}
