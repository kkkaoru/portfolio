type Props = {
  children: React.ReactNode;
};

export function Section({ children }: Props): JSX.Element {
  return <section className="max-w-full pt-8">{children}</section>;
}
