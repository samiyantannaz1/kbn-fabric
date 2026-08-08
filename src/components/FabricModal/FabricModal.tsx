


import { useEffect } from "react";
import { motion } from "framer-motion";

import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import { useLanguage } from "@/hooks/useLanguage";
import fa from "@/locales/fa";
import en from "@/locales/en";
import FabricZoomViewer from "@/components/FabricZoomViewer/FabricZoomViewer";


interface GalleryItem {
  id: number;
  image: string;
}


interface Props {
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}


function FabricModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {


  const { language } = useLanguage();

  const text = language === "fa" ? fa : en;

  const currentImage = images[currentIndex];


  useEffect(() => {

    document.body.style.overflow = "hidden";


    const handleKeyDown = (event: KeyboardEvent) => {

      switch (event.key) {

        case "ArrowLeft":
          onPrev();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "Escape":
          onClose();
          break;

      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };


  }, [onPrev, onNext, onClose]);



  if (!currentImage) return null;



  return (

    <motion.div

      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      exit={{
        opacity: 0,
      }}

      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
        p-3
        sm:p-8
      "

      onClick={onClose}

    >


      <motion.div

        initial={{
          scale: 0.92,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        exit={{
          scale: 0.92,
          opacity: 0,
        }}

        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}


       className="
  relative
  flex
  max-h-[90vh]
  w-full
  max-w-6xl
  flex-col
  rounded-3xl
  bg-transparent
  pb-6
  overflow-y-auto
  lg:overflow-visible
"


        onClick={(e) =>
          e.stopPropagation()
        }

      >



        {/* Close Button */}

        <button

          type="button"

          onClick={onClose}

          className="
            absolute
            right-3
            top-3
            z-30
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/20
            text-xl
            text-white
            backdrop-blur-md
            transition
            hover:scale-110
            hover:bg-white/40
            sm:right-5
            sm:top-5
          "

        >
          ×

        </button>




        {/* Previous Button */}

        <button

          type="button"

          onClick={onPrev}

          className="
            absolute
            left-2
            top-1/2
            z-30
            -translate-y-1/2
            rounded-full
            border
            border-white/30
            bg-white/20
            p-2
            text-2xl
            text-white
            backdrop-blur-md
            transition
            hover:scale-110
            hover:bg-white/40
            sm:left-5
            sm:p-4
            sm:text-3xl
          "

        >
          ‹

        </button>




        {/* Image Viewer */}

        <FabricZoomViewer

          image={currentImage.image}

          alt={`Fabric ${currentIndex + 1}`}

        />




        {/* Next Button */}

        <button

          type="button"

          onClick={onNext}

          className="
            absolute
            right-2
            top-1/2
            z-30
            -translate-y-1/2
            rounded-full
            border
            border-white/30
            bg-white/20
            p-2
            text-2xl
            text-white
            backdrop-blur-md
            transition
            hover:scale-110
            hover:bg-white/40
            sm:right-5
            sm:p-4
            sm:text-3xl
          "

        >

          ›

        </button>




        {/* WhatsApp Button */}

        <div
          className="
            mt-6
            flex
            justify-center
            px-4
          "
        >

          <WhatsAppButton

            message={text.fabric.whatsappMessage}

            label={text.fabric.requestCatalog}

          />

        </div>





        {/* Counter */}

        <p

          className="
            mt-5
            text-center
            text-sm
            font-medium
            text-white
          "

        >

          {currentIndex + 1} / {images.length}

        </p>



      </motion.div>


    </motion.div>

  );
}


export default FabricModal;