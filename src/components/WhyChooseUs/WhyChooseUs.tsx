

import { features } from "@/data/feature";
import FeatureCard from "./FeatureCard";

import Container from "@/container/Container";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

function WhyChooseUs() {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  return (
    <section className="py-20">
      <Container>

        <SectionTitle
          subtitle={t.whyChooseUs.subtitle}
          title={t.whyChooseUs.title}
          description={t.whyChooseUs.description}
        />

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={t.whyChooseUs.items[feature.key].title}
              description={
                t.whyChooseUs.items[feature.key].description
              }
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default WhyChooseUs;