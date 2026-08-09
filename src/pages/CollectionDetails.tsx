
import { useParams } from "react-router-dom";

import { collections } from "@/data/collections";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Container from "@/container/Container";
import FabricSpecifications from "@/components/FabricSpecifications/FabricSpecifications";
import AvailableColors from "@/components/AvailableColors/AvailableColors";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import SEO from "@/components/SEO/SEO";

function CollectionDetails() {
  const { key } = useParams();

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  const collection = collections.find(
    (item) => item.key === key
  );

  if (!collection) {
    return (
      <div
        className={`
          flex
          min-h-[60vh]
          items-center
          justify-center
          ${language === "fa" ? "font-fa" : "font-en"}
        `}
      >
        {language === "fa"
          ? "کالکشن پیدا نشد"
          : "Collection not found"}
      </div>
    );
  }

  const details =
    t.collectionDetails[collection.key];

  const seoTitle =
    language === "fa"
      ? `${details.title} | K.B.N`
      : `${details.title} | K.B.N Upholstery Fabrics`;

  const seoDescription =
    details.description;

  const whatsappMessage =
    language === "fa"
      ? `سلام، درباره کالکشن ${details.title} اطلاعات بیشتری می‌خواهم.`
      : `Hello, I would like more information about the ${details.title} collection.`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
      />

      <Container>
        <div
          className="
            mx-auto
            px-4
            py-2
            sm:py-12
            md:py-16
          "
        >
          {/* =========================
              IMAGE + CONTENT
          ========================== */}

          <div
            className="
              grid
              items-start
              gap-1
              sm:gap-6
              md:grid-cols-2
              md:items-center
              md:gap-10
            "
          >
            {/* =========================
                IMAGE
            ========================== */}

            <div className="w-full">
              <ImageViewer
                image={collection.image}
                alt={details.title}
              />
            </div>

            {/* =========================
                CONTENT
            ========================== */}

            <div
              className={`
                w-full
                ${
                  language === "fa"
                    ? "text-right"
                    : "text-left"
                }
              `}
            >
              <h1
                className="
                  text-3xl
                  font-bold
                  text-neutral-900
                  sm:text-4xl
                "
              >
                {details.title}
              </h1>

              <p
                className="
                  mt-4
                  text-base
                  leading-8
                  text-neutral-600
                  sm:mt-6
                  sm:text-lg
                  sm:leading-8
                "
              >
                {details.description}
              </p>

              <div className="mt-6 sm:mt-8">
                <WhatsAppButton
                  label={t.fabric.requestCatalog}
                  message={whatsappMessage}
                />
              </div>
            </div>
          </div>

          {/* =========================
              SPECIFICATIONS
          ========================== */}

          <FabricSpecifications />

          {/* =========================
              COLORS
          ========================== */}

          <AvailableColors />
        </div>
      </Container>
    </>
  );
}

export default CollectionDetails;

