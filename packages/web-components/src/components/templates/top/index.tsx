import { ListSnSLinks, SnsLinksProps } from '@web-components/components/molecules/link';

export type TopProps = SnsLinksProps;

export function Top({ ...snsLinkProps }: TopProps): JSX.Element {
  return <ListSnSLinks {...snsLinkProps} />;
}
