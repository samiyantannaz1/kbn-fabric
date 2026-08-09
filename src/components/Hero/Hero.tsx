


import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

import Container from "@/container/Container";
import heroImage from "@/assets/images/hero/hero6.jpg";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};

function Hero() {
  const { language } = useLanguage();

  const [showPhone, setShowPhone] = useState(false);

  const t = language === "fa" ? fa : en;

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";

  const isRTL = language === "fa";

  const phoneNumber = "09122711834";
  const phoneHref = `tel:${phoneNumber}`;

  return (
    <section>
      <Container>
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="
            grid
            w-full
            min-w-0
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-16
            xl:gap-20
            lg:mt-10
            xl:mt-10
          "
        >
          {/* =========================
              TEXT CONTENT
          ========================== */}

          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className={`
              ${fontClass}
              w-full
              min-w-0
              max-w-full
              overflow-hidden
              lg:max-w-2xl
            `}
          >
            {/* Subtitle */}

            <motion.div
              variants={textItem}
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#C08A5B]
                  sm:w-14
                "
              />

              <p
                className={`
                  ${fontClass}
                  m-0
                  text-sm
                  font-medium
                  text-[#C08A5B]
                  sm:text-base
                  ${
                    isRTL
                      ? "tracking-normal"
                      : "uppercase tracking-[3px]"
                  }
                `}
              >
                {t.hero.subtitle}
              </p>
            </motion.div>

            {/* Title */}

            <motion.h1
              variants={textItem}
              className={`
                ${fontClass}
                m-0
                max-w-2xl
                text-4xl
                font-bold
                leading-[1.35]
                text-[#1F1F1F]
                sm:text-5xl
                md:text-6xl
                lg:text-[4.2rem]
                lg:leading-tight
              `}
            >
              {t.hero.title.line1}

              <br />

              <span className="text-[#C08A5B]">
                {t.hero.title.line2}
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={textItem}
              className={`
                ${fontClass}
                mt-6
                max-w-xl
                text-base
                leading-8
                text-[#666666]
                sm:mt-7
                sm:text-lg
                sm:leading-9
              `}
            >
              {t.hero.description}
            </motion.p>

            {/* =========================
                BUTTONS
            ========================== */}

            <motion.div
              variants={textItem}
              className="
                mt-8
                flex
                flex-wrap
                gap-4
                sm:mt-10
              "
            >
              {/* View Collections */}

              <NavLink
                to="/collections"
                className="
                  group
                  inline-flex
                  min-h-13
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#1F1F1F]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#C08A5B]
                  hover:shadow-xl
                  sm:px-8
                  sm:text-base
                "
              >
                <span>
                  {t.hero.explore}
                </span>

                <span
                  className={`
                    ${isRTL ? "mr-3" : "ml-3"}
                    transition-transform
                    duration-300
                    ${
                      isRTL
                        ? "group-hover:-translate-x-1"
                        : "group-hover:translate-x-1"
                    }
                  `}
                >
                  {isRTL ? "←" : "→"}
                </span>
              </NavLink>

              {/* Contact Us */}

              <div className="relative">
                {/* MOBILE */}

                <a
                  href={phoneHref}
                  className="
                    inline-flex
                    min-h-13
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#C08A5B]
                    bg-transparent
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#C08A5B]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#C08A5B]
                    hover:text-white
                    hover:shadow-lg
                    sm:px-8
                    sm:text-base
                    md:hidden
                  "
                >
                  {t.hero.contact}
                </a>

                {/* DESKTOP */}

                <button
                  type="button"
                  onClick={() =>
                    setShowPhone((prev) => !prev)
                  }
                  className="
                    hidden
                    min-h-13
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#C08A5B]
                    bg-transparent
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#C08A5B]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#C08A5B]
                    hover:text-white
                    hover:shadow-lg
                    sm:px-8
                    sm:text-base
                    md:inline-flex
                  "
                >
                  {t.hero.contact}
                </button>

                {/* DESKTOP PHONE POPUP */}

                {showPhone && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-full
                      z-20
                      mt-3
                      w-max
                      -translate-x-1/2
                      rounded-xl
                      border
                      border-[#C08A5B]/20
                      bg-white
                      px-5
                      py-3
                      text-center
                      shadow-xl
                    "
                  >
                    <a
                      href={phoneHref}
                      dir="ltr"
                      className="
                        block
                        text-base
                        font-semibold
                        tracking-wide
                        text-[#C08A5B]
                        transition-colors
                        hover:text-[#A97449]
                      "
                    >
                      {phoneNumber}
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Small Brand Detail */}

            <motion.div
              variants={textItem}
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  h-px
                  w-12
                  bg-[#D8CFC3]
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[2px]
                  text-[#999999]
                "
              >
                K.B.N
              </span>

              <div
                className="
                  h-px
                  w-12
                  bg-[#D8CFC3]
                "
              />
            </motion.div>
          </motion.div>

          {/* =========================
              HERO IMAGE
          ========================== */}

          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className="
              relative
              w-full
              min-w-0
            "
          >
            {/* Decorative Border */}

            <div
              className="
                absolute
                -bottom-3
                -left-3
                -right-3
                -top-3
                rounded-4xl
                border
                border-[#C08A5B]/20
              "
            />

            {/* Image */}

            <div
              className="
                relative
                h-80
                overflow-hidden
                rounded-[1.75rem]
                sm:h-100
                md:h-120
                lg:h-140
                xl:h-155
              "
            >
              <img
                src={heroImage}
                alt="Luxury upholstery fabric collection"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  hover:scale-105
                "
              />

              {/* Image Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Floating Brand Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className={`
                ${fontClass}
                absolute
                bottom-5
                ${
                  isRTL
                    ? "left-5"
                    : "right-5"
                }
                rounded-2xl
                border
                border-white/30
                bg-white/90
                px-5
                py-3
                shadow-lg
                backdrop-blur-md
              `}
            >
              <p
                className="
                  m-0
                  text-xs
                  font-semibold
                  tracking-[2px]
                  text-[#1F1F1F]
                "
              >
                K.B.N
              </p>

              <span
                className="
                  mt-1
                  block
                  text-[10px]
                  text-[#888888]
                "
              >
                Premium Fabrics
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

