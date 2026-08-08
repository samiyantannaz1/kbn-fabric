


import { useState } from "react";


interface FabricZoomViewerProps {
  image: string;
  alt: string;
}


function FabricZoomViewer({
  image,
  alt,
}: FabricZoomViewerProps) {


  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });


  const [showZoom, setShowZoom] = useState(false);



  const updatePosition = (
    clientX: number,
    clientY: number,
    element: HTMLDivElement
  ) => {

    const rect = element.getBoundingClientRect();


    const x =
      ((clientX - rect.left) / rect.width) * 100;


    const y =
      ((clientY - rect.top) / rect.height) * 100;


    setPosition({
      x,
      y,
    });

  };



  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    updatePosition(
      e.clientX,
      e.clientY,
      e.currentTarget
    );

  };



  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {

    const touch = e.touches[0];


    updatePosition(
      touch.clientX,
      touch.clientY,
      e.currentTarget
    );


    setShowZoom(true);

  };




  return (

    <div
      className="
        grid
        gap-6
        lg:grid-cols-2
        items-start
      "
    >


      {/* Main Image */}

      <div

        className="
          relative
          overflow-hidden
          rounded-3xl
          cursor-crosshair
          select-none
        "


        onMouseMove={handleMouseMove}

        onMouseEnter={() =>
          setShowZoom(true)
        }

        onMouseLeave={() =>
          setShowZoom(false)
        }


        onTouchMove={handleTouchMove}

        onTouchEnd={() =>
          setShowZoom(false)
        }

      >


        <img

          src={image}

          alt={alt}

          className="
            w-full
            aspect-square
            object-cover
          "

        />



        {showZoom && (

          <div

            className="
              absolute
              h-24
              w-24
              rounded-xl
              border
              border-white
              bg-white/20
              backdrop-blur-sm
              pointer-events-none
            "

            style={{

              left: `${position.x}%`,

              top: `${position.y}%`,

              transform:
                "translate(-50%, -50%)",

            }}

          />

        )}


      </div>





      {/* Zoom Panel */}

      <div

        className="
          h-72
          rounded-3xl
          overflow-hidden
          border
          border-white/20
          lg:h-[75vh]
        "

      >

        <div

          className="
            w-full
            h-full
            transition-all
            duration-500
            ease-out
          "

          style={{

            backgroundImage:
              `url(${image})`,

            backgroundRepeat:
              "no-repeat",

            backgroundSize:
              "250%",


            backgroundPosition:
              `${position.x}% ${position.y}%`,

          }}

        />

      </div>


    </div>

  );
}


export default FabricZoomViewer;