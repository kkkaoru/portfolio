import { generateTitleByImportMetaUrl } from './auto';

describe('generateTitleByImportMetaUrl', () => {
  it('should return the title from the import meta tag', () => {
    expect(
      generateTitleByImportMetaUrl(
        'http://localhost:6006/stories/atoms/text/text-with-underline.stories.tsx?t=1631207425163',
      ),
    ).toBe('atoms/text');
  });
});
