import { useState } from "react";

type Props = {
  image: string;
  alt: string;
};


function ImageZoom({
  image,
  alt,
}: Props) {

  const [showZoom, setShowZoom] = useState(false);
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });


  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const {
      left,
      top,
      width,
      height,
    } = e.currentTarget.getBoundingClientRect();


    const x =
      ((e.clientX - left) / width) * 100;

    const y =
      ((e.clientY - top) / height) * 100;


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
      "
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMove}
    >

      <img
        src={image}
        alt={alt}
        className="
          h-[420px]
          w-full
          object-cover
        "
      />


      {showZoom && (

        <div
          className="
            absolute
            right-6
            top-6
            h-40
            w-40
            overflow-hidden
            rounded-full
            border-4
            border-white
            shadow-xl
          "
        >

          <img
            src={image}
            alt={alt}
            className="
              absolute
              h-[800px]
              w-[800px]
              max-w-none
              object-cover
            "
            style={{
              left: `${-position.x * 5}px`,
              top: `${-position.y * 5}px`,
            }}
          />

        </div>

      )}

    </div>
  );
}

export default ImageZoom;