export function generateTitleByImportMetaUrl(metaUrl: string): string {
  return new URL(metaUrl).pathname.replace(/\/([^/]*?)$/, '').replace(/^\/stories\//, '');
}
