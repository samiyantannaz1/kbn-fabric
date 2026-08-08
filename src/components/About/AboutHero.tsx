

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

import fa from "@/locales/fa";
import en from "@/locales/en";

import aboutImage from "@/assets/images/about/about2.jpg";


function AboutHero() {

  const { language } = useLanguage();

  const text = language === "fa" ? fa : en;

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";


  return (

    <section
      className="
        relative
        flex
        min-h-[85vh]
        items-center
        justify-center
        overflow-hidden
      "
    >

      <motion.img

        src={aboutImage}

        alt="K.B.N upholstery fabrics"

        initial={{
          scale: 1.1,
        }}

        animate={{
          scale: 1,
        }}

        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}

        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "

      />


      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/60
          via-black/40
          to-black/70
        "
      />


      <motion.div

        initial={{
          opacity:0,
          y:30,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          duration:0.9,
          delay:0.2,
        }}

        className={`
          relative
          z-10
          mx-auto
          max-w-4xl
          px-6
          text-center
          text-white
          ${fontClass}
        `}

      >

        <div
          className="
            mx-auto
            mb-8
            h-[2px]
            w-20
            bg-[#C08A5B]
          "
        />


        <h1
          className="
            text-4xl
            font-medium
            tracking-wide
            leading-tight
            sm:text-5xl
            lg:text-7xl
          "
        >

          {text.about.hero.title}

        </h1>



        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-base
            leading-8
            text-white/85
            sm:text-lg
          "
        >

          {text.about.hero.description}

        </p>


      </motion.div>


    </section>

  );
}


export default AboutHero;