
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import { useOffcanvas } from "@/hooks/useOffcanvas";
import { useLanguage } from "@/hooks/useLanguage";

import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

import en from "@/locales/en";
import fa from "@/locales/fa";

function OffcanvasMenu() {
  const { isOpen, closeMenu } = useOffcanvas();

  const { language, toggleLanguage } = useLanguage();

  const t = language === "fa" ? fa : en;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

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
            md:hidden
          "
        />
      )}

      {/* Offcanvas */}
      <aside
        className={`
          fixed
          inset-y-0
          right-0
          z-50
          flex
         h-dvh
          w-72
          flex-col
          overflow-hidden
          bg-white
          shadow-2xl
          transition-transform
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
            shrink-0
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
            type="button"
            onClick={closeMenu}
            aria-label={
              language === "fa"
                ? "بستن منو"
                : "Close menu"
            }
            className="
              rounded-lg
              p-2
              text-neutral-700
              transition
              hover:bg-neutral-100
              hover:text-[#C08A5B]
            "
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="min-h-0 flex-1 overflow-y-auto">
          <ul>
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
                      text-base
                      transition-colors
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
        </nav>

        {/* Actions */}
        <div
          className="
            shrink-0
            border-t
            border-neutral-200
            bg-white
            px-6
            pt-4
            pb-[calc(1rem+env(safe-area-inset-bottom))]
          "
        >
          <div className="flex flex-col gap-3">
            {/* Language */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="
                w-full
                rounded-xl
                border
                border-neutral-300
                px-4
                py-3
                text-sm
                font-medium
                text-neutral-700
                transition
                hover:border-[#C08A5B]
                hover:text-[#C08A5B]
              "
            >
              {language === "en" ? "FA" : "EN"}
            </button>

            {/* WhatsApp */}
            <WhatsAppButton
              message={whatsappMessage}
              label={t.navbar.catalog}
              className="w-full"
            />
          </div>
        </div>
      </aside>
    </>
  );
}

export default OffcanvasMenu;

