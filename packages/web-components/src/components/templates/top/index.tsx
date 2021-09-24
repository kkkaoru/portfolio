import { ListSnSLinks, SnsLinksProps, ContactLink, TitleLink } from '@web-components/components/molecules/link';
import { Section } from '@web-components/components/atoms/section';
import { RoundedIcon } from '@web-components/components/atoms/icon';
import { H2 } from '@web-components/components/atoms/title';
import { TitleAndDescription } from '@web-components/components/molecules/text';
import { Header } from '@web-components/components/organisms/header';
import { Footer } from '@web-components/components/organisms/footer';

export type TopProps = {
  ImageComponent: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
  repositoryLink: string;
  contactLink: string;
  footerText: string;
  emoji: string;
} & SnsLinksProps;

export function Top({
  ImageComponent,
  repositoryLink,
  contactLink,
  footerText,
  emoji,
  ...snsLinkProps
}: TopProps): JSX.Element {
  return (
    <div className="flex flex-col md:min-h-screen">
      <Header emoji={emoji} />
      <Section>
        <RoundedIcon ImageComponent={ImageComponent} />
      </Section>
      <Section>
        <TitleAndDescription title="NAME" description="KAORU" useSerif />
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
        <TitleLink href={repositoryLink} text="REPOSITORY URL" />
      </Section>
      <Section>
        <ContactLink href={contactLink} />
      </Section>
      <Footer text={footerText} />
    </div>
  );
}
