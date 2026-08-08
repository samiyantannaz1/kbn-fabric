import type { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

function Badge({
  children,
  variant = "primary",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";

  const variants = {
    primary:
      "bg-[#C08A5B]/10 text-[#C08A5B]",

    secondary:
      "bg-neutral-100 text-neutral-700",
  };

  return (
    <span
      className={`
        ${baseClasses}
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;