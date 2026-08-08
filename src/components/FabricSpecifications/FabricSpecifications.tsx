import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";


function FabricSpecifications() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  const items = [
    t.fabricSpecifications.items.material,
    t.fabricSpecifications.items.width,
    t.fabricSpecifications.items.usage,
    t.fabricSpecifications.items.care,
  ];


  return (
    <section className="py-16">

      <div className="container mx-auto px-4">


        <h2
          className="
            mb-8
            text-3xl
            font-bold
            text-neutral-900
          "
        >
          {t.fabricSpecifications.title}
        </h2>


        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >

          {items.map((item) => (

            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
              "
            >

              <h3
                className="
                  text-sm
                  font-medium
                  text-[#C08A5B]
                "
              >
                {item.label}
              </h3>


              <p
                className="
                  mt-2
                  text-lg
                  text-neutral-800
                "
              >
                {item.value}
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}


export default FabricSpecifications;