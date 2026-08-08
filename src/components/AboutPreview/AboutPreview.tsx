import { motion } from "framer-motion";

import Container from "@/container/Container";

import Button from "../UI/Button/Button";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

import aboutImage from "@/assets/images/about/about.jpg";


function AboutPreview() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  return (
    <section className="py-20">

      <Container>

        <div
          className="
            grid
            items-center
            gap-10
            md:grid-cols-2
          "
        >


          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              overflow-hidden
              rounded-3xl
            "
          >

            <img
              src={aboutImage}
              alt="About K.B.N"
              className="
                h-full
                w-full
                object-cover
              "
            />

          </motion.div>



          {/* Text */}

          <motion.div

            initial={{
              opacity: 0,
              x: 50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}

          >

            <p className="mb-4 text-sm uppercase tracking-[3px] text-[#C08A5B]">

              {t.aboutPreview.subtitle}

            </p>



            <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">

              {t.aboutPreview.title}

            </h2>



            <p className="mt-6 leading-8 text-neutral-600">

              {t.aboutPreview.description}

            </p>



            <div className="mt-8">

          <Button href="/about">

                {t.aboutPreview.button}

              </Button>

            </div>


          </motion.div>


        </div>

      </Container>

    </section>
  );
}


export default AboutPreview;