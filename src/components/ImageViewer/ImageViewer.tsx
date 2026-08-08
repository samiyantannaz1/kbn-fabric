import { useRef, useState } from "react";


type Props = {
  image: string;
  alt: string;
};


function ImageViewer({
  image,
  alt,
}: Props) {

  const [showLens, setShowLens] = useState(false);

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });
const imageRef = useRef<HTMLImageElement>(null);

 const handleMouseMove = (
  e: React.MouseEvent<HTMLImageElement>
) => {

  if (!imageRef.current) return;

  const rect =
    imageRef.current.getBoundingClientRect();

  const x =
    ((e.clientX - rect.left) / rect.width) * 100;

  const y =
    ((e.clientY - rect.top) / rect.height) * 100;

  if (
    x < 0 ||
    x > 100 ||
    y < 0 ||
    y > 100
  ) {
    setShowLens(false);
    return;
  }

  setShowLens(true);

  setPosition({
    x,
    y,
  });

};

  return (

    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        cursor-crosshair
        select-none
          h-[75vh]
    w-full
      "
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      
    >


      {/* Main Fabric Image */}

      {/* <img
      src={image}
  alt={alt}
  className="
    h-[55vh] md:h-[75vh]
    w-full
    object-contain
    rounded-3xl
        "
      /> */}
    <img
  ref={imageRef}
  src={image}
  alt={alt}
  onMouseMove={handleMouseMove}
  onMouseEnter={() => setShowLens(true)}
  onMouseLeave={() => setShowLens(false)}
  className="
    h-full
    w-full
    object-contain
    rounded-3xl
  "
/>


      {/* Magnifier Lens */}

      {showLens && (

<div
  className="
    pointer-events-none
    absolute
    rounded-full
    border
    border-white/80
    bg-white/10
    shadow-2xl
    backdrop-blur-[2px]
    transition-all
    duration-150
    ease-out

    h-40
    w-40

    md:h-56
    md:w-56

    lg:h-64
    lg:w-64
  "
          style={{

left: `calc(${position.x}% - 128px)`,
top: `calc(${position.y}% - 128px)`,

            backgroundImage:
              `url(${image})`,


            backgroundRepeat:
              "no-repeat",


          
             backgroundSize:
  "400% 400%",


            backgroundPosition:
              `${position.x}% ${position.y}%`,


            backgroundColor:
              "rgba(255,255,255,0.1)",

  filter:
    "contrast(1.1)",
          }}
        />

      )}

    </div>

  );
}


export default ImageViewer;