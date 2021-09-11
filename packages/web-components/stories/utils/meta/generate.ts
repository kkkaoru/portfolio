import type { Meta } from '@storybook/react';

import { generateTitleByImportMetaUrl } from '@stories/utils/title';
import { ComponentType } from 'react';

export function generateStoryMeta(metaUrl: string, component: ComponentType): Meta {
  return {
    title: generateTitleByImportMetaUrl(metaUrl),
    component,
  };
}
