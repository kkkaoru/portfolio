import { LinkTextBgBlue, LinkTextProps } from '@web-components/components/atoms/link';

export type ContactLinkProps = {
  text?: string;
} & Omit<LinkTextProps, 'text'>;

export function ContactLink({ text = 'CONTACT US', ...props }: ContactLinkProps): JSX.Element {
  return (
    <div className="pt-20 grid place-items-center">
      <LinkTextBgBlue text={text} {...props} />
    </div>
  );
}
