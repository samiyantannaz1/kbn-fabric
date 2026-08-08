import { motion } from "framer-motion";

import Container from "@/container/Container";

import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";


function ContactCTA() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  const fontClass =
    language === "fa"
      ? "font-fa"
      : "font-en";


  return (

    <section className="py-20">

      <Container>

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}

          className={`
            ${fontClass}
            rounded-3xl
            bg-[#C08A5B]
            px-8
            py-16
            text-center
            text-white
            md:px-16
          `}

        >


          <h2
            className="
              text-3xl
              font-bold
              md:text-5xl
            "
          >
            {t.contactPage.cta.title}
          </h2>



          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              leading-8
              text-white/90
            "
          >
            {t.contactPage.cta.description}
          </p>



        
<div className="mt-10 flex justify-center">
  <motion.div
    className="relative"
    animate={{
      y: [0, -3, 0],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.05,
      y: -2,
    }}
  >
    {/* Animated Glow */}
    <motion.div
      className="absolute -inset-2 -z-10 rounded-full bg-[#C08A5B]/20 blur-lg"
      animate={{
        opacity: [0.2, 0.5, 0.2],
        scale: [0.95, 1.08, 0.95],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* <WhatsAppButton
      message={
        language === "fa"
          ? "سلام، درخواست دریافت کاتالوگ پارچه‌های K.B.N را دارم."
          : "Hello, I would like to request the K.B.N fabric catalog."
      }
      label={t.contactPage.cta.button}
    /> */}
  
<WhatsAppButton
  message={
    language === "fa"
      ? "سلام، درخواست دریافت کاتالوگ پارچه‌های K.B.N را دارم."
      : "Hello, I would like to request the K.B.N fabric catalog."
  }
  label={t.contactPage.cta.button}
  className="
    !bg-[#9F6D45]
    text-white
    shadow-lg
    shadow-black/10
    hover:!bg-[#875B3A]
    hover:shadow-xl
  "
/>


  </motion.div>
</div>



        </motion.div>


      </Container>


    </section>

  );

}


export default ContactCTA;
