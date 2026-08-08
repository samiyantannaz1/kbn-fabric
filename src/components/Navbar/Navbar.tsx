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

    <nav
      className="
        w-full
        border-b
        border-gray-200
        bg-white
      "
    >

      <Container>

        <div
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >


          {/* Logo */}

          <NavLink
            to="/"
            className="
              flex
              flex-col
              font-en
            "
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
                font-fa
                text-[11px]
                tracking-wider
                text-gray-500
              "
            >
              کریشه بافت نساج
            </span>


          </NavLink>




          {/* Desktop Menu */}

          <ul
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >

            {links.map((link) => (

              <li
                key={link.path}
              >

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





          {/* Actions */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >


            {/* Language */}

            <button
             
              onClick={toggleLanguage}

              className="
                text-sm
                text-gray-600
                transition
                hover:text-[#C08A5B]
              "

            >

              {language === "en"
                ? "FA"
                : "EN"
              }

            </button>




            {/* Desktop Catalog */}
<div
  className="
    hidden
    md:block
  "
>
  <motion.div
    animate={{
      x: [0, -4, 4, -3, 3, 0],
      scale: [1, 1.02, 1.02, 1.01, 1],
    //       x: [0, -8, 8, -6, 6, 0],
    // scale: [1, 1.04, 1.04, 1.02, 1],
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
  className="!bg-[#C08A5B] hover:!bg-[#A97449]"
/>
  </motion.div>
</div>




            {/* Mobile Menu Button */}

            <button

              onClick={toggleMenu}

              className="
                flex
                text-2xl
                text-gray-700
                md:hidden
              "

              aria-label="Open menu"

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