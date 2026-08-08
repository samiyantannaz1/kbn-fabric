import { motion } from "framer-motion";

import Container from "@/container/Container";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

function CollectionsHero() {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";

  return (
    <section className="bg-stone-50 py-24">

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
          className="mx-auto max-w-3xl text-center"
        >

          <p
            className={`${fontClass} text-sm uppercase tracking-[4px] text-[#C08A5B]`}
          >
            {t.collectionsPage.subtitle}
          </p>

          <h1
            className={`${fontClass} mt-4 text-5xl font-bold text-neutral-900`}
          >
            {t.collectionsPage.title}
          </h1>

          <p
            className={`${fontClass} mt-6 text-lg leading-8 text-neutral-600`}
          >
            {t.collectionsPage.description}
          </p>

        </motion.div>

      </Container>

    </section>
  );
}

export default CollectionsHero;