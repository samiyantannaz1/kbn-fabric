import { motion } from "framer-motion";

import Container from "@/container/Container";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";


function ContactHero() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  const fontClass =
    language === "fa"
      ? "font-fa"
      : "font-en";


  return (

    <section
      className="
        bg-stone-50
        py-24
      "
    >

      <Container>

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className={`
            mx-auto
            max-w-3xl
            text-center
            ${fontClass}
          `}

        >


          {/* Accent */}

          <div
            className="
              mx-auto
              mb-8
              h-[2px]
              w-20
              bg-[#C08A5B]
            "
          />



          <p
            className="
              text-sm
              uppercase
              tracking-[4px]
              text-[#C08A5B]
            "
          >
            {t.contactPage.hero.subtitle}
          </p>



          <h1
            className="
              mt-5
              text-4xl
              font-bold
              text-neutral-900
              md:text-6xl
            "
          >
            {t.contactPage.hero.title}
          </h1>



          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-neutral-600
            "
          >
            {t.contactPage.hero.description}
          </p>



        </motion.div>


      </Container>


    </section>

  );
}


export default ContactHero;