import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "@/container/Container";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";

import { collections } from "@/data/collections";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

function FeaturedCollections() {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";

  return (
    <section className="bg-white py-24">

      <Container>

        <SectionTitle
          subtitle={t.collections.subtitle}
          title={t.collections.title}
          description={t.collections.description}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {collections.map((item, index) => (

            <motion.div
              key={item.id}
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
                duration: 0.6,
               delay: index * 0.15,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-stone-50
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Image */}

              <div className="h-96 overflow-hidden">

                <img
                  src={item.image}
                  alt={t.collections.items[item.key].title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>


              {/* Content */}

              <div className="p-6">

                <h3
                  className={`
                    ${fontClass}
                    text-2xl
                    font-semibold
                    text-neutral-900
                  `}
                >
                  {t.collections.items[item.key].title}
                </h3>


                <p
                  className={`
                    ${fontClass}
                    mt-4
                    leading-7
                    text-gray-600
                  `}
                >
                  {t.collections.items[item.key].description}
                </p>

{/* 
                <button
                  className="
                    mt-6
                    font-medium
                    text-yellow-700
                    transition
                    hover:text-yellow-800
                  "
                >
                  {language === "en"
                    ? "View Collection →"
                    : "مشاهده کالکشن ←"}
                </button> */}

                <Link
  to={`/collections/${item.key}`}
  className="
    mt-6
    inline-flex
    items-center
    gap-2
    font-medium
    text-[#C08A5B]
    transition-all
    duration-300
    hover:gap-3
    hover:text-[#A97449]
  "
>
  {language === "en"
    ? "View Collection"
    : "مشاهده کالکشن"}

  <span>
    {language === "en" ? "→" : "←"}
  </span>
</Link>
                

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default FeaturedCollections;