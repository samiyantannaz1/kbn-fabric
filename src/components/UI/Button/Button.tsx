
import { NavLink } from "react-router-dom";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "light";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonProps =
  | (BaseButtonProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (BaseButtonProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#1F1F1F] text-white hover:bg-[#C08A5B]",

    secondary:
      "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",

    light:
      "bg-white text-[#C08A5B] hover:bg-neutral-100",
  };

  const buttonClasses = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-7
    py-3.5
    text-sm
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-lg
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={buttonClasses}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        to={href}
        className={buttonClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export default Button;

