
import Container from "@/container/Container";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

import {
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

function ContactInfo() {
  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  const fontClass =
    language === "fa"
      ? "font-fa"
      : "font-en";

  const items = [
    {
      key: "address",
      icon: MapPin,
      label: t.contactPage.info.items.address.label,
      value: t.contactPage.info.items.address.value,
    },
    {
      key: "phone",
      icon: Phone,
      label: t.contactPage.info.items.phone.label,
      value: t.contactPage.info.items.phone.value,
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: t.contactPage.info.items.whatsapp.label,
      value: t.contactPage.info.items.whatsapp.value,
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className={`${fontClass} text-center`}>
          <h2
            className="
              text-3xl
              font-bold
              text-neutral-900
              md:text-4xl
            "
          >
            {t.contactPage.info.title}
          </h2>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="
                    rounded-3xl
                    border
                    border-neutral-200
                    bg-white
                    p-8
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C08A5B]/10
                      text-[#C08A5B]
                    "
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      text-[#C08A5B]
                    "
                  >
                    {item.label}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-neutral-600
                    "
                  >
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactInfo;








  // Mail,
    // {
    //   key: "email",
    //   icon: Mail,
    //   label: t.contactPage.info.items.email.label,
    //   value: t.contactPage.info.items.email.value,
    // },