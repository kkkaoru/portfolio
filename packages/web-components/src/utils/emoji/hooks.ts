import { useState, useEffect } from 'react';
import { findRandomEmoji } from './random';

export function useRandomEmoji(interval = 2000): string {
  const [randomEmoji, setRandom] = useState(findRandomEmoji());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRandom(findRandomEmoji());
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [randomEmoji, interval]);

  return randomEmoji;
}
