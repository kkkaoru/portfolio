import { LinkAndImageProps, LinkIncludedImage } from '@web-components/components/atoms/link';

export type LinksProps = {
  list: LinkAndImageProps[];
};

export function ListLinkIncludedImage({ list }: LinksProps): JSX.Element {
  if (list.length === 0) {
    return <></>;
  }
  return (
    <ul className="grid grid-cols-2 place-items-center">
      {list.map((link) => (
        <li key={decodeURIComponent(link.href)}>
          <LinkIncludedImage {...link} />
        </li>
      ))}
    </ul>
  );
}
