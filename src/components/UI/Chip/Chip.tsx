import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
}

function Chip({
  children,
  active = false,
}: ChipProps) {
  return (
    <button
      className={`
        rounded-full
        px-4
        py-2
        text-sm
        transition

        ${
          active
            ? "bg-[#C08A5B] text-white"
            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
        }
      `}
    >
      {children}
    </button>
  );
}

export default Chip;