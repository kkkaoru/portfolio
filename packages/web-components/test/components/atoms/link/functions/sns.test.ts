import { generateSnsUrl, generateTwitterUrl, generateGitHubUrl } from '@web-components/components/atoms/link/functions';

describe('generate sns url', () => {
  it('should be undefined', () => {
    expect(generateSnsUrl('', 'https://twitter.com/TwitterJP')).toBeUndefined();
  });
  it('should be generated url with prefix', () => {
    expect(generateSnsUrl('TwitterJP', 'https://twitter.com/')).toBe('https://twitter.com/TwitterJP');
  });
});

describe('generate twitter url', () => {
  it('should be generated twitter url', () => {
    expect(generateTwitterUrl('TwitterJP')).toBe('https://twitter.com/TwitterJP');
  });
});

describe('generate github url', () => {
  it('should be generated github url', () => {
    expect(generateGitHubUrl('github')).toBe('https://github.com/github');
  });
});
