import { useLanguage } from "@/hooks/useLanguage";

type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
};

function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {

  const { language } = useLanguage();

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";


  return (
    <div className={`mx-auto max-w-2xl text-center ${fontClass}`}>

      {subtitle && (
        <p className="mb-3 text-sm uppercase tracking-[4px] text-yellow-700">
          {subtitle}
        </p>
      )}


      <h2 className="
        text-3xl
        font-bold
        text-neutral-900
        md:text-5xl
      ">
        {title}
      </h2>


      {description && (
        <p className="
          mt-5
          text-lg
          leading-8
          text-gray-600
        ">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;