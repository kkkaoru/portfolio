export type DescriptionProps = {
  description: string;
};

export function Description({ description }: DescriptionProps): JSX.Element {
  return <p className="flex justify-center pt-2">{description}</p>;
}
