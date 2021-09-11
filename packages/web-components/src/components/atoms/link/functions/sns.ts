export function generateSnsUrl(id: string, urlPrefix: string): string | undefined {
  if (id === '') {
    return undefined;
  }
  return `${urlPrefix}${id}`;
}

export function generateTwitterUrl(twitterId: string): string | undefined {
  return generateSnsUrl(twitterId, 'https://twitter.com/');
}

export function generateGitHubUrl(githubId: string): string | undefined {
  return generateSnsUrl(githubId, 'https://github.com/');
}
