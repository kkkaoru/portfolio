import { ReactComponent as PartyFaceSVG } from '@web-components/assets/emoji/party-face.svg';

export function PartyFace(): JSX.Element {
  return (
    <div className="h-6">
      <PartyFaceSVG className="w-full h-full" />
    </div>
  );
}
