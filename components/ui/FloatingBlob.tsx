interface FloatingBlobProps {
  color: "coral" | "teal" | "yellow" | "purple";
  size?: "sm" | "md" | "lg";
  className?: string;
  delay?: string;
}

const sizes = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
};

const opacities = {
  coral: "opacity-60",
  teal: "opacity-50",
  yellow: "opacity-70",
  purple: "opacity-40",
};

export default function FloatingBlob({
  color,
  size = "md",
  className = "",
  delay,
}: FloatingBlobProps) {
  return (
    <div
      className={`bg-${color} ${opacities[color]} ${sizes[size]} blob float ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    />
  );
}
