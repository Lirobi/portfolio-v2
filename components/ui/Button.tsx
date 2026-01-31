import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "magnetic";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary: "hand-drawn bg-foreground text-background hover:bg-coral hover:text-foreground",
  secondary: "hand-drawn bg-background text-foreground hover:bg-yellow",
  outline: "magnetic bg-background/10 text-background border-2 border-background/30 hover:bg-background/20 rounded-full",
  magnetic: "magnetic bg-coral text-foreground hover:bg-yellow rounded-full glow-coral",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all";
  const variantStyles = variants[variant];

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}
