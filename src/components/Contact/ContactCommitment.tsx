import { motion } from "framer-motion";

import Container from "@/container/Container";

import { useLanguage } from "@/hooks/useLanguage";

import en from "@/locales/en";
import fa from "@/locales/fa";

function ContactCommitment() {
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
          className="
            rounded-3xl
            bg-stone-50
            p-10
            text-center
            md:p-14
          "
        >

          {/* <span
            className={`${fontClass} text-sm uppercase tracking-[3px] text-[#C08A5B]`}
          >
            {t.contactPage.commitment.subtitle}
          </span> */}

          <h2
            className={`${fontClass} mt-4 text-3xl font-bold text-neutral-900 md:text-4xl`}
          >
            {t.contactPage.commitment.title}
          </h2>

          <p
            className={`${fontClass} mx-auto mt-6 max-w-3xl leading-8 text-neutral-600`}
          >
            {t.contactPage.commitment.description}
          </p>

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
            "
          >
            {Object.values(
              t.contactPage.commitment.items
            ).map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <p
                  className={`${fontClass} text-lg font-medium text-neutral-800`}
                >
                  ✓ {item}
                </p>
              </div>
            ))}
          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default ContactCommitment;