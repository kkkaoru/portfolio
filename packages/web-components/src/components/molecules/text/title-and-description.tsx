import { H2, TitleProps } from '@web-components/components/atoms/title';
import { Description, DescriptionProps } from '@web-components/components/atoms/description';

export type TitleAndDescriptionProps = TitleProps & DescriptionProps;

export function TitleAndDescription({ title, description, useSerif }: TitleAndDescriptionProps): JSX.Element {
  return (
    <>
      <H2 title={title} />
      <Description description={description} useSerif={useSerif} />
    </>
  );
}
