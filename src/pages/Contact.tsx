import ContactCommitment from "@/components/Contact/ContactCommitment";
import ContactCTA from "@/components/Contact/ContactCTA";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";

import SEO from "@/components/SEO/SEO";

import { useLanguage } from "@/hooks/useLanguage";

import en from "@/locales/en";
import fa from "@/locales/fa";


export default function Contact() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  return (

    <>

      <SEO
        title={t.seo.contact.title}
        description={t.seo.contact.description}
      />


      <ContactHero />

      <ContactInfo />

      <ContactCommitment />

      <ContactCTA />

    </>

  );

}