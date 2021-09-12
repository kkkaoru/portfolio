import { ListSnSLinks, SnsLinksProps, ContactLink } from '@web-components/components/molecules/link';
import { Section } from '@web-components/components/atoms/section';
import { RoundedIcon } from '@web-components/components/atoms/icon';
import { H2 } from '@web-components/components/atoms/title';
import { TitleAndDescription } from '@web-components/components/molecules/text';
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
        <TitleAndDescription title="JOB" description="Front End Developer" />
      </Section>
      <Section>
        <TitleAndDescription title="SKILLS" description="React, Vue.js, TypeScript, SCSS, HTML" />
      </Section>
      <Section>
        <H2 title="SNS LINKS" />
        <ListSnSLinks {...snsLinkProps} />
      </Section>
      <Section>
        <ContactLink href="#" />
      </Section>
    </>
  );
}
