import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

function IconButton({
  icon,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-neutral-300
        bg-white
        transition
        hover:bg-[#C08A5B]
        hover:text-white
        ${className}
      `}
      {...props}
    >
      {icon}
    </button>
  );
}

export default IconButton;