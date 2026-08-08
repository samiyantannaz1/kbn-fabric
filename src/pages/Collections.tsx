import CollectionsHero from "@/components/CollectionsHero/CollectionsHero";
import Container from "@/container/Container";

import FabricGallery from "@/components/FabricGallery/FabricGallery";
import { fabricGallery } from "@/data/fabricGallery";

import SEO from "@/components/SEO/SEO";

import { useLanguage } from "@/hooks/useLanguage";

import en from "@/locales/en";
import fa from "@/locales/fa";


function Collections() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  return (

    <>

      <SEO
        title={t.seo.collections.title}
        description={t.seo.collections.description}
      />


      <CollectionsHero />


      <Container>

        <FabricGallery
          images={fabricGallery}
        />

      </Container>

    </>

  );

}


export default Collections;