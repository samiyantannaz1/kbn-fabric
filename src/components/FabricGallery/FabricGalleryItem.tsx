


import { useLanguage } from "@/hooks/useLanguage";

import en from "@/locales/en";
import fa from "@/locales/fa";


interface FabricGalleryItemProps {
  image: string;
  alt: string;
  onClick: () => void;
}


function FabricGalleryItem({
  image,
  alt,
  onClick,
}: FabricGalleryItemProps) {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  return (

    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
      "
    >

      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />


      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/20
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >

        <span
          className="
            rounded-full
            bg-white/90
            px-5
            py-2
            text-sm
            font-medium
            text-gray-800
          "
        >
          {t.fabricGallery.view}
        </span>

      </div>

    </button>

  );

}


export default FabricGalleryItem;