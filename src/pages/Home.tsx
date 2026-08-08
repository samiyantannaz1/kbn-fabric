import AboutPreview from "@/components/AboutPreview/AboutPreview";
import ContactBanner from "@/components/ContactBanner/ContactBanner";
import FeaturedCollections from "@/components/FeaturedCollections/FeaturedCollections";
import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import SEO from "@/components/SEO/SEO";

import { useLanguage } from "@/hooks/useLanguage";

import en from "@/locales/en";
import fa from "@/locales/fa";


function Home() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  return (

    <>

      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
      />


      <Hero />

      <FeaturedCollections />

      <WhyChooseUs />

      <AboutPreview />

      <ContactBanner />

    </>

  );
}


export default Home;