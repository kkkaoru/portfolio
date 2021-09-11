import { EmptyDivComponent } from '@mocks/empty';
import type { Meta } from '@storybook/react';
import { generateStoryMeta } from './generate';

describe('generateStoryMeta', () => {
  it('should generate story meta', () => {
    expect(
      generateStoryMeta(
        'http://localhost:6006/stories/atoms/text/text-with-underline.stories.tsx?t=1631207425163',
        EmptyDivComponent,
      ),
    ).toEqual({
      title: 'atoms/text',
      component: EmptyDivComponent,
    } as Meta);
  });
});
