


import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import { useOffcanvas } from "@/hooks/useOffcanvas";
import { useLanguage } from "@/hooks/useLanguage";

import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

import en from "@/locales/en";
import fa from "@/locales/fa";

function OffcanvasMenu() {
  const {
    isOpen,
    closeMenu,
  } = useOffcanvas();

  const {
    language,
    toggleLanguage,
  } = useLanguage();

  const t = language === "fa" ? fa : en;

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    {
      name: t.navbar.home,
      path: "/",
    },
    {
      name: t.navbar.collections,
      path: "/collections",
    },
    {
      name: t.navbar.about,
      path: "/about",
    },
    {
      name: t.navbar.contact,
      path: "/contact",
    },
  ];

  const whatsappMessage =
    language === "fa"
      ? "سلام، درخواست دریافت کاتالوگ پارچه‌های K.B.N را دارم."
      : "Hello, I would like to request the K.B.N fabric catalog.";

  return (
    <>
      {/* Overlay */}

      {isOpen && (
        <div
          onClick={closeMenu}
          className="
            fixed
            inset-0
            z-40
            bg-black/50
            backdrop-blur-sm
            transition-opacity
            duration-300
            md:hidden
          "
        />
      )}

      {/* Menu */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          bg-white
          shadow-2xl
          transition-all
          duration-300
          ease-out
          md:hidden

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-neutral-200
            px-6
            py-5
          "
        >
          <div className="flex flex-col">
            <span
              className="
                text-2xl
                font-bold
                tracking-[4px]
                text-neutral-900
              "
            >
              K
              <span className="text-[#C08A5B]">
                .
              </span>
              B
              <span className="text-[#C08A5B]">
                .
              </span>
              N
            </span>

            <span
              className="
                mt-1
                text-[11px]
                text-neutral-500
              "
            >
              کریشه بافت نساج
            </span>
          </div>

          <button
            onClick={closeMenu}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-neutral-100
            "
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}

        <ul className="flex-1">
          {links.map((link) => (
            <li
              key={link.path}
              className="border-b border-neutral-100"
            >
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  block
                  px-6
                  py-5
                  transition

                  ${
                    isActive
                      ? "font-semibold text-[#C08A5B]"
                      : "text-neutral-700 hover:text-[#C08A5B]"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}

     <div
  className="
    flex
    flex-col
    gap-4
    border-t
    border-neutral-200
    p-6
  "
>
          <button
            onClick={toggleLanguage}
            className="
              w-full
              rounded-xl
              border
              border-neutral-300
              px-4
              py-3
              transition
              hover:border-[#C08A5B]
              hover:text-[#C08A5B]
            "
          >
            {language === "en"
              ? "FA"
              : "EN"}
          </button>

          <WhatsAppButton
            message={whatsappMessage}
            label={t.navbar.catalog}
          />
        </div>
      </aside>
    </>
  );
}

export default OffcanvasMenu;