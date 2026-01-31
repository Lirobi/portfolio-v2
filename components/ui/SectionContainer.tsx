import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-32 px-6 md:px-12 lg:px-24 xl:px-0 relative ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
