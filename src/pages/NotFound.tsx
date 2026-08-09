import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@/container/Container";

import { useLanguage } from "@/hooks/useLanguage";

import en from "@/locales/en";
import fa from "@/locales/fa";

import notFoundImage from "@/assets/images/notFound/notFound.jpg";


function NotFound() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  const fontClass =
    language === "fa"
      ? "font-fa"
      : "font-en";



  return (

    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
      "
    >


      {/* Background */}

      <motion.img

        src={notFoundImage}

        alt="K.B.N upholstery fabrics"

        initial={{
          scale: 1.1,
        }}

        animate={{
          scale: 1,
        }}

        transition={{
          duration: 1.5,
        }}

        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "

      />



      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/60
        "
      />




      <Container>

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className={`
            ${fontClass}
            relative
            z-10
            text-center
            text-white
          `}

        >


          <div
            className="
              mx-auto
              mb-8
              h-0.5
              w-20
              bg-[#C08A5B]
            "
          />



          <h1
            className="
              text-8xl
              font-bold
              tracking-widest
              text-[#C08A5B]
              md:text-9xl
            "
          >
            404
          </h1>



          <h2
            className="
              mt-6
              text-3xl
              font-medium
              md:text-5xl
            "
          >
            {t.notFound.title}
          </h2>



          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              leading-8
              text-white/80
              md:text-lg
            "
          >
            {t.notFound.description}
          </p>




          <Link

            to="/"

            className="
              mt-10
              inline-flex
              h-12
              items-center
              justify-center
              rounded-xl
              bg-[#C08A5B]
              px-10
              text-sm
              font-medium
              text-white
              transition
              hover:bg-[#A97449]
            "

          >

            {t.notFound.button}

          </Link>



        </motion.div>


      </Container>


    </section>

  );

}


export default NotFound;