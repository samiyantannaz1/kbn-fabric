import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";


function AvailableColors() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  const colors = [
    {
      name: t.availableColors.items.beige,
      className: "bg-[#D8C3A5]",
    },

    {
      name: t.availableColors.items.black,
      className: "bg-black",
    },

    {
      name: t.availableColors.items.gray,
      className: "bg-gray-500",
    },

    {
      name: t.availableColors.items.brown,
      className: "bg-[#8B5E3C]",
    },

    {
      name: t.availableColors.items.cream,
      className: "bg-[#F5E6CC]",
    },
  ];


  return (
    <section className="py-10">

      <div className="container mx-auto px-4">


        <h2
          className="
            mb-6
            text-2xl
            font-bold
            text-neutral-900
          "
        >
          {t.availableColors.title}
        </h2>


        <div className="flex flex-wrap gap-6">

          {colors.map((color) => (

            <div
              key={color.name}
              className="flex items-center gap-3"
            >

              <span
                className={`
                  h-10
                  w-10
                  rounded-full
                  border
                  border-neutral-300
                  ${color.className}
                `}
              />

              <span
                className="
                  text-neutral-700
                "
              >
                {color.name}
              </span>

            </div>

          ))}

        </div>


      </div>

    </section>
  );
}


export default AvailableColors;