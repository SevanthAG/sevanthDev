import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  id: string;
  cmd: string;
  index: number;
  children: ReactNode;
};

export function Section({ id, cmd, index, children }: SectionProps) {
  return (
    <section
      className="block stack-block reveal"
      id={id}
      style={{ "--i": index } as CSSProperties}
    >
      <h2 className="cat">
        <span className="cat__mark">$</span> cat {cmd}
      </h2>
      {children}
    </section>
  );
}
