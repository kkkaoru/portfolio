import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Icon = (args: unknown): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // Remove warning about HTML to contain a matching
  // @link https://github.com/vercel/next.js/discussions/17443
  return mounted ? (
    <Image
      src="/images/icon.jpg"
      alt="kkkaoru's social icon"
      width={320}
      height={320}
      layout="fixed"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQYGBgYICQgJCAwLCgoLDBINDg0ODRIbERQRERQRGxgdGBYYHRgrIh4eIisyKigqMjw2NjxMSExkZIYBBQUFBQUFBgYGBggJCAkIDAsKCgsMEg0ODQ4NEhsRFBERFBEbGB0YFhgdGCsiHh4iKzIqKCoyPDY2PExITGRkhv/CABEIACAAIAMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAGBAUHAQL/2gAIAQEAAAAAoeqa8D4fo4eetXmc6fOL/wD/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAX/2gAIAQIQAAAAzWl//8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAE/9oACAEDEAAAANgh/8QALBAAAgEDAwIEBQUAAAAAAAAAAQIDBAURAAYhEiIHMUFxExQyUWEVJDOBof/aAAgBAQABPwB5aSmiQTxmXP1RD19scjRuNNUQyVNPb6plQquPf0zgc6Fkgq6CCto3kCTIWAbDjt8x1LwCNU9prJEqZY4x0opLMTwAo1U18l4nMNPSfDKn6yhxq67tm278OGJH7OOR192PQHGvCPe1ruluTbNbSIJnkklikiXoJZvNTjXiEl02/TUsu35pEgmnMMztzggZzz99WD9MqaNnbochM9o7fcNjW6Voau80M3yskkQWbmNC+HAC5IHvrw62NR2q4NfZWxLOv7GNvRXH8mPyNeK8r2/ZaTSR4ljqlcp5hsrjK62rUrXrR2+SqpUh9RGULzHGecYP9Y1R7Mt8j9c0KkgCRARlSw/B+2qG2xz3dhNICc9LHPcp5/zjjXjjdaYbfprZMrlpJA8U6dydn31//8QAGREBAQEAAwAAAAAAAAAAAAAAAQIAERIh/9oACAECAQE/AI7V4TqgMRQnBmVhXf/EABsRAAIDAAMAAAAAAAAAAAAAAAABAgMSIVFh/9oACAEDAQE/AM8DaK7VXPTWvCU9zb7P/9k="
      {...args}
    />
  ) : (
    <div />
  );
};
