type Props = {
  children: React.ReactNode;
};

export function Section({ children }: Props): JSX.Element {
  return <section className="max-w-full pt-6">{children}</section>;
}
// className = 'grid place-items-center';
