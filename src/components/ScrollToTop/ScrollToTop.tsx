import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


function ScrollToTop() {

  const [visible, setVisible] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };


  }, []);




  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };




  return (

    <button

      onClick={scrollToTop}

      className={`
        fixed
        bottom-6
        right-6
        z-40

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full

        bg-[#C08A5B]
        text-white

        shadow-lg

        transition-all
        duration-300

        hover:bg-[#A97449]

        ${
          visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
        }

      `}

      aria-label="Scroll to top"

    >

      <ArrowUp size={22}/>

    </button>

  );

}


export default ScrollToTop;