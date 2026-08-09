
// // import type {
// //   AnchorHTMLAttributes,
// //   ButtonHTMLAttributes,
// //   ReactNode,
// // } from "react";

// // type ButtonVariant = "primary" | "secondary" | "light";

// // type BaseProps = {
// //   children: ReactNode;
// //   variant?: ButtonVariant;
// //   className?: string;
// // };

// // type ButtonProps =
// //   | (BaseProps &
// //       ButtonHTMLAttributes<HTMLButtonElement> & {
// //         href?: never;
// //       })
// //   | (BaseProps &
// //       AnchorHTMLAttributes<HTMLAnchorElement> & {
// //         href: string;
// //       });

// // function Button({
// //   children,
// //   variant = "primary",
// //   className = "",
// //   href,
// //   ...props
// // }: ButtonProps) {
// //   const baseClasses = `
// //     inline-flex
// //     h-12
// //     items-center
// //     justify-center
// //     rounded-xl
// //     px-8
// //     text-sm
// //     font-medium
// //     transition
// //     duration-300
// //   `;

// //   const variants = {
// //     primary:
// //       "bg-[#C08A5B] text-white hover:bg-[#A97449]",

// //     secondary:
// //       "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",

// //     light:
// //       "bg-white text-[#C08A5B] hover:bg-neutral-100",
// //   };

// //   const classes = `${baseClasses} ${variants[variant]} ${className}`;

// //   if (href) {
// //     return (
// //       <a
// //         href={href}
// //         className={classes}
// //         {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
// //       >
// //         {children}
// //       </a>
// //     );
// //   }

// //   return (
// //     <button
// //       className={classes}
// //       {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
// //     >
// //       {children}
// //     </button>
// //   );
// // }

// // export default Button;



// import { NavLink } from "react-router-dom";
// import type { ReactNode } from "react";

// interface ButtonProps {
//   href?: string;
//   children: ReactNode;
//   className?: string;
// }

// function Button({
//   href,
//   children,
//   className = "",
// }: ButtonProps) {
//   const buttonClasses = `
//     inline-flex
//     items-center
//     justify-center
//     rounded-xl
//     bg-[#1F1F1F]
//     px-7
//     py-3.5
//     text-sm
//     font-semibold
//     text-white
//     transition-all
//     duration-300
//     hover:-translate-y-1
//     hover:bg-[#C08A5B]
//     hover:shadow-lg
//     ${className}
//   `;

//   if (href) {
//     return (
//       <NavLink
//         to={href}
//         className={buttonClasses}
//       >
//         {children}
//       </NavLink>
//     );
//   }

//   return (
//     <button
//       type="button"
//       className={buttonClasses}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;




import { NavLink } from "react-router-dom";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface BaseButtonProps {
  children: ReactNode;
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
  className = "",
  ...props
}: ButtonProps) {
  const buttonClasses = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    bg-[#1F1F1F]
    px-7
    py-3.5
    text-sm
    font-semibold
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#C08A5B]
    hover:shadow-lg
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
      className={buttonClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export default Button;
