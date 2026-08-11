

import { Link } from "react-router-dom";

import Container from "@/container/Container";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";


function Footer() {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;

  const fontClass =
    language === "fa" ? "font-fa" : "font-en";


  const links = [
    {
      title: t.footer.links.home,
      path: "/",
    },
    {
      title: t.footer.links.collections,
      path: "/collections",
    },
    {
      title: t.footer.links.about,
      path: "/about",
    },
    {
      title: t.footer.links.contact,
      path: "/contact",
    },
  ];


  return (

    <footer
      className="
        border-t
        border-neutral-200
        bg-stone-50
        py-16
      "
    >

      <Container>

        <div
          className={`
            grid
            gap-12
            md:grid-cols-3
            ${language === "fa" ? "text-right" : "text-left"}
          `}
        >


          {/* Brand */}

          <div>

            <h2
              className={`
                ${fontClass}
                text-3xl
                font-bold
                text-[#C08A5B]
              `}
            >
              K.B.N
            </h2>


            <p
              className={`
                ${fontClass}
                mt-5
                leading-8
                text-neutral-600
              `}
            >
              {t.footer.description}
            </p>

          </div>



          {/* Links */}

          <div>

            <h3
              className={`
                ${fontClass}
                mb-5
                text-xl
                font-semibold
              `}
            >
              {t.footer.quickLinks}
            </h3>


            <ul className="space-y-3 text-neutral-600">

              {links.map((link)=>(
                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="
                      transition
                      hover:text-[#C08A5B]
                    "
                  >
                    {link.title}
                  </Link>

                </li>
              ))}


            </ul>

          </div>




          {/* Contact */}

          <div>

            <h3
              className={`
                ${fontClass}
                mb-5
                text-xl
                font-semibold
              `}
            >
              {t.footer.contact}
            </h3>


            <div
              className="
                space-y-3
                text-neutral-600
              "
            >

              <p>
                📍 {t.footer.address}

              </p>
              <p>
                {t.footer.addressDetail}
              </p>


              <a
                href="tel:02166144067"
                className="block hover:text-[#C08A5B]"
              >
                📞 02166144067
              </a>


              <a
                href="tel:09122711834"
                className="block hover:text-[#C08A5B]"
              >
                📞 09120949168
              </a>


              {/* <a
                href="mailto:info@kbnfabric.com"
                className="block hover:text-[#C08A5B]"
              >
                ✉ info@kbnfabric.com
              </a> */}


            </div>

          </div>


        </div>



        {/* Copyright */}

        <div
          className="
            mt-12
            border-t
            border-neutral-200
            pt-8
            text-center
            text-sm
            text-neutral-500
          "
        >

          <p className={fontClass}>
            {t.footer.copyright}
          </p>

        </div>


      </Container>


    </footer>

  );
}


export default Footer;