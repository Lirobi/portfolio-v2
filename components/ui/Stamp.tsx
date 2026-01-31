import { ReactNode } from "react";

interface StampProps {
  children: ReactNode;
  className?: string;
}

export default function Stamp({ children, className = "" }: StampProps) {
  return (
    <span className={`stamp font-mono text-sm ${className}`}>
      {children}
    </span>
  );
}
