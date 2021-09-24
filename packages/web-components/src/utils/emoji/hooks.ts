import { useState, useEffect } from 'react';
import { findRandomEmoji } from './random';
import { generateRandomInterval } from './interval';
import { defaultSVGEmojiUrl } from './default';

export function useRandomEmoji(interval?: number): string {
  // This not same emoji between favicon and in page in production when cached it and csr when emoji is random at first
  const [randomEmoji, setRandomEmoji] = useState(defaultSVGEmojiUrl);
  const [randomInterval, setRandomInterval] = useState(interval ?? generateRandomInterval());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRandomEmoji(findRandomEmoji());
      setRandomInterval(interval ?? generateRandomInterval());
    }, randomInterval);

    return () => clearTimeout(timeoutId);
  }, [randomEmoji, randomInterval, interval]);

  return randomEmoji;
}
