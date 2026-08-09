



import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@/container/Container";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

import { useLanguage } from "@/hooks/useLanguage";
import { useOffcanvas } from "@/hooks/useOffcanvas";

import en from "@/locales/en";
import fa from "@/locales/fa";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { toggleMenu } = useOffcanvas();

  const t = language === "fa" ? fa : en;

  const isRTL = language === "fa";

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

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <Container>
        <div className="relative flex h-20 items-center justify-between">

          {/* =====================================================
              LOGO
              Desktop: normal position
              Mobile:
              Persian  → LEFT
              English  → RIGHT
          ====================================================== */}

          <NavLink
            to="/"
            className={`
              flex
              flex-col
              font-en

              md:static

              ${
                isRTL
                  ? "absolute left-0"
                  : "absolute right-0"
              }

              top-1/2
              -translate-y-1/2

              md:translate-y-0
            `}
          >
            <span
              className="
                text-2xl
                font-bold
                tracking-[4px]
                text-neutral-900
              "
            >
              K
              <span className="text-[#C08A5B]">.</span>
              B
              <span className="text-[#C08A5B]">.</span>
              N
            </span>

            <span
              className="
                mt-1
                font-fa
                text-[11px]
                tracking-wider
                text-gray-500
              "
            >
              کریشه بافت نساج
            </span>
          </NavLink>


          {/* =====================================================
              DESKTOP MENU
          ====================================================== */}

          <ul
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
                      text-sm
                      transition

                      ${
                        isActive
                          ? "font-semibold text-[#C08A5B]"
                          : "text-gray-600 hover:text-[#C08A5B]"
                      }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>


          {/* =====================================================
              DESKTOP ACTIONS
          ====================================================== */}

          <div
            className="
              hidden
              items-center
              gap-4
              md:flex
            "
          >

            {/* Language */}

            <button
              type="button"
              onClick={toggleLanguage}
              className="
                text-sm
                text-gray-600
                transition
                hover:text-[#C08A5B]
              "
            >
              {language === "en" ? "FA" : "EN"}
            </button>


            {/* WhatsApp */}

            <motion.div
              animate={{
                x: [0, -4, 4, -3, 3, 0],
                scale: [1, 1.02, 1.02, 1.01, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            >
              <WhatsAppButton
                message={
                  language === "fa"
                    ? "سلام، درخواست دریافت کاتالوگ پارچه‌های K.B.N را دارم."
                    : "Hello, I would like to request the K.B.N fabric catalog."
                }
                label={t.navbar.catalog}
                className="
                  bg-[#C08A5B]!
                  hover:bg-[#A97449]!
                "
              />
            </motion.div>

          </div>


          {/* =====================================================
              MOBILE ACTIONS

              Persian:
              EN  ☰   → RIGHT

              English:
              ☰  FA   → LEFT
          ====================================================== */}

          <div
            className={`
              absolute
              top-1/2
              flex
              -translate-y-1/2
              items-center
              gap-3
              md:hidden

              ${
                isRTL
                  ? "right-0"
                  : "left-0"
              }
            `}
          >

            {/* Language */}

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={
                isRTL
                  ? "تغییر زبان به انگلیسی"
                  : "Change language to Persian"
              }
              className="
                flex
                h-10
                min-w-10
                items-center
                justify-center
                rounded-lg
                px-2
                text-sm
                font-medium
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-[#C08A5B]
              "
            >
              {language === "en" ? "FA" : "EN"}
            </button>


            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                isRTL
                  ? "باز کردن منو"
                  : "Open menu"
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                text-2xl
                leading-none
                text-gray-700
                transition
                hover:bg-gray-100
                hover:text-[#C08A5B]
              "
            >
              ☰
            </button>

          </div>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

