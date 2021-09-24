import { useState, useEffect } from 'react';
import { findRandomEmoji } from './random';
import { generateRandomInterval } from './interval';

export function useRandomEmoji(interval?: number): string {
  const [randomEmoji, setRandomEmoji] = useState(findRandomEmoji());
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
