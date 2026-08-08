type Props = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function FilterButton({
  label,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full
        px-6
        py-3
        text-sm
        font-medium
        transition
        duration-300

        ${
          active
            ? "bg-[#C08A5B] text-white"
            : "bg-stone-100 text-neutral-700 hover:bg-stone-200"
        }
      `}
    >
      {label}
    </button>
  );
}

export default FilterButton;