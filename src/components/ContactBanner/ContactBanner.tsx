import { motion } from "framer-motion";

import Container from "@/container/Container";
import Button from "@/components/UI/Button/Button";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

function ContactBanner() {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";

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
          className="
            rounded-3xl
            bg-[#C08A5B]
            px-8
            py-16
            text-center
            text-white
            md:px-16
          "
        >
          <p
            className={`
              ${fontClass}
              text-sm
              uppercase
              tracking-[3px]
              text-white/80
            `}
          >
            {t.contactBanner.subtitle}
          </p>

          <h2
            className={`
              ${fontClass}
              mt-4
              text-3xl
              font-bold
              md:text-5xl
            `}
          >
            {t.contactBanner.title}
          </h2>

          <p
            className={`
              ${fontClass}
              mx-auto
              mt-6
              max-w-2xl
              leading-8
              text-white/90
            `}
          >
            {t.contactBanner.description}
          </p>

          <div className="mt-10">
            <Button
              href="/contact"
              variant="light"
            >
              {t.contactBanner.button}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactBanner;