

import { motion, type Variants } from "framer-motion";
import Container from "@/container/Container";
import heroImage from "@/assets/images/hero/hero6.jpg";
import Button from "../UI/Button/Button";
import en from "@/locales/en";
import fa from "@/locales/fa";
import { useLanguage } from "@/hooks/useLanguage";

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

function Hero() {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";


  return (
    <section className="relative min-h-175 overflow-hidden bg-stone-50">

      <Container>

        <div
          className="
            grid
            min-h-175
            items-center
            gap-6
            md:grid-cols-[0.75fr_1.25fr]
          "
        >


          {/* Text */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >

            <motion.p
              variants={textItem}
              className={`${fontClass} mb-4 text-sm uppercase tracking-[4px] text-yellow-700`}
            >
              {t.hero.subtitle}
            </motion.p>


            <motion.h1
              variants={textItem}
              className={`${fontClass} text-5xl font-bold leading-tight text-neutral-900 md:text-6xl`}
            >
              {t.hero.title.line1}
              <br />
              {t.hero.title.line2}
            </motion.h1>


            <motion.p
              variants={textItem}
              className={`${fontClass} mt-6 max-w-lg text-lg leading-8 text-gray-600`}
            >
              {t.hero.description}
            </motion.p>


            <motion.div
              variants={textItem}
              className="mt-8 flex gap-4"
            >


<Button href="/collections">
  {t.hero.explore}
</Button>


<Button href="/contact" variant="secondary">
  {t.hero.contact}
</Button>

            </motion.div>

          </motion.div>



          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut" as const,
            }}
            className="
              h-125
              overflow-hidden
              rounded-3xl
              lg:h-155
            "
          >

            <img
              src={heroImage}
              alt="Luxury upholstery fabric collection"
              className="
                h-full
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />

          </motion.div>


        </div>

      </Container>

    </section>
  );
}

export default Hero;