import { ReactNode } from "react";

interface StickerProps {
  children: ReactNode;
  className?: string;
}

export default function Sticker({ children, className = "" }: StickerProps) {
  return (
    <span
      className={`sticker inline-flex items-center gap-2 px-4 py-2 font-mono text-sm rounded-full cursor-default ${className}`}
    >
      {children}
    </span>
  );
}
