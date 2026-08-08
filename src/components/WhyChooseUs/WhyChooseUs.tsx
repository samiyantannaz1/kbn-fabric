// import { features } from "@/data/feature";
// import FeatureCard from "./FeatureCard";

// import en from "@/locales/en";
// import fa from "@/locales/fa";

// import { useLanguage } from "@/hooks/useLanguage";
// import Container from "@/container/Container";


// function WhyChooseUs() {

//   const { language } = useLanguage();

//   const t = language === "fa" ? fa : en;


//   return (
//   <Container>
//       <section className="py-20">

//       <div className="container mx-auto px-4">


//         <div className="mb-12 text-center">

//           <span className="text-sm text-[#C08A5B]">
//             {t.whyChooseUs.subtitle}
//           </span>


//           <h2 className="mt-3 text-3xl font-bold">
//             {t.whyChooseUs.title}
//           </h2>


//           <p className="mt-4 text-neutral-600">
//             {t.whyChooseUs.description}
//           </p>

//         </div>



//         <div
//           className="
//             grid
//             gap-8
//             md:grid-cols-2
//             lg:grid-cols-4
//           "
//         >

//           {features.map((feature) => (

//             <FeatureCard
//               key={feature.id}
//               icon={feature.icon}
//               title={
//                 t.whyChooseUs.items[feature.key].title
//               }
//               description={
//                 t.whyChooseUs.items[feature.key].description
//               }
//             />

//           ))}

//         </div>


//       </div>

//     </section>
//   </Container>
//   );
// }


// export default WhyChooseUs;

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