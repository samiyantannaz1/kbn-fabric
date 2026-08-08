import AboutHero from "@/components/About/AboutHero";
import AboutValues from "@/components/About/AboutValues";
import BrandStory from "@/components/About/BrandStory";

import SEO from "@/components/SEO/SEO";

import { useLanguage } from "@/hooks/useLanguage";

import en from "@/locales/en";
import fa from "@/locales/fa";


export default function About() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  return (

    <>

      <SEO
        title={t.seo.about.title}
        description={t.seo.about.description}
      />


      <AboutHero />

      <BrandStory />

      <AboutValues />

    </>

  );

}