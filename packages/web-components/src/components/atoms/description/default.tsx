export type DescriptionProps = {
  description: string;
  useSerif?: boolean;
};

export function Description({ description, useSerif }: DescriptionProps): JSX.Element {
  return <p className={`flex justify-center pt-2 px-8 text-center ${useSerif ? 'font-serif' : ''}`}>{description}</p>;
}
