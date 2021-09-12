import { ListSnSLinks, SnsLinksProps } from '@web-components/components/molecules/link';
import { Section } from '@web-components/components/atoms/section';
import { RoundedIcon } from '@web-components/components/atoms/icon';
import { H2 } from '@web-components/components/atoms/title';
import { Header } from '@web-components/components/organisms/header';

export type TopProps = {
  ImageComponent: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
} & SnsLinksProps;

export function Top({ ImageComponent, ...snsLinkProps }: TopProps): JSX.Element {
  return (
    <>
      <Header />
      <Section>
        <RoundedIcon ImageComponent={ImageComponent} />
      </Section>
      <Section>
        <H2 title="SNS LINKS" />
        <ListSnSLinks {...snsLinkProps} />
      </Section>
    </>
  );
}
