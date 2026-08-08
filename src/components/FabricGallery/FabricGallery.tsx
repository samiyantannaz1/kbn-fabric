

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import FabricGalleryItem from "./FabricGalleryItem";
import FabricModal from "@/components/FabricModal/FabricModal";


interface GalleryItem {
  id: number;
  image: string;
}


interface FabricGalleryProps {
  images: GalleryItem[];
}


function FabricGallery({
  images,
}: FabricGalleryProps) {

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);


  return (

    <>

      <div
        className="
          grid
          grid-cols-2
          gap-6
          md:grid-cols-3
          xl:grid-cols-4
        "
      >

        {images.map((item, index) => (

          <FabricGalleryItem
            key={item.id}
            image={item.image}
            alt={`K.B.N fabric ${item.id}`}
            onClick={() => setSelectedIndex(index)}
          />

        ))}

      </div>


      <AnimatePresence>

        {selectedIndex !== null && (

          <FabricModal
            images={images}
            currentIndex={selectedIndex}

            onClose={() =>
              setSelectedIndex(null)
            }

            onPrev={() =>
              setSelectedIndex((prev) =>

                prev === null
                  ? null
                  : prev === 0
                    ? images.length - 1
                    : prev - 1

              )
            }

            onNext={() =>
              setSelectedIndex((prev) =>

                prev === null
                  ? null
                  : prev === images.length - 1
                    ? 0
                    : prev + 1

              )
            }

          />

        )}

      </AnimatePresence>

    </>

  );

}


export default FabricGallery;