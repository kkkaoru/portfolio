export type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps): JSX.Element {
  return (
    <footer className="flex items-end justify-center flex-1 pt-20 pb-4">
      <span className="font-serif text-sm text-gray-600">{text}</span>
    </footer>
  );
}
