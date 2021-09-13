import { LinkTextProps } from '@web-components/components/atoms/link/types';
import { H2 } from '@web-components/components/atoms/title';

export function TitleLink({ text, target = '_blank', rel = 'noopener', ...linkProps }: LinkTextProps): JSX.Element {
  return (
    <div className="flex justify-center pt-8">
      <a {...linkProps} target={target} rel={rel} className="underline">
        <H2 title={text} fontSize="text-xl" fontWeight="font-normal" fontStyle="italic" />
      </a>
    </div>
  );
}
