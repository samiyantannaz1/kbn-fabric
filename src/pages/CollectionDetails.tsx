// import { useParams } from "react-router-dom";

// import { collections } from "@/data/collections";

// import en from "@/locales/en";
// import fa from "@/locales/fa";

// import { useLanguage } from "@/hooks/useLanguage";

// import ImageViewer from "@/components/ImageViewer/ImageViewer";
// import Container from "@/container/Container";
// import FabricSpecifications from "@/components/FabricSpecifications/FabricSpecifications";
// import AvailableColors from "@/components/AvailableColors/AvailableColors";


// function CollectionDetails() {

//   const { key } = useParams();

//   const { language } = useLanguage();

//   const t = language === "fa" ? fa : en;


//   const collection = collections.find(
//     (item) => item.key === key
//   );


//   if (!collection) {
//     return (
//       <div className="py-20 text-center">
//         Collection not found
//       </div>
//     );
//   }


//   const details =
//     t.collectionDetails[collection.key];


//   return (
//     <section className="py-20">

//     <Container>
//           <div className="mx-auto px-4">

//         <div
//           className="
//             grid
//             items-center
//             gap-10
//             md:grid-cols-2
//           "
//         >

//           {/* Image Viewer */}

//           <ImageViewer
//             image={collection.image}
//             alt={details.title}
//           />


//           {/* Content */}

//           <div>

//             <h1
//               className="
//                 text-4xl
//                 font-bold
//                 text-neutral-900
//               "
//             >
//               {details.title}
//             </h1>


//             <p
//               className="
//                 mt-6
//                 text-lg
//                 leading-8
//                 text-neutral-600
//               "
//             >
//               {details.description}
//             </p>


//             <button
//               className="
//                 mt-8
//                 rounded-xl
//                 bg-[#C08A5B]
//                 px-8
//                 py-4
//                 text-white
//                 transition
//                 hover:bg-[#A97449]
//               "
//             >
//               {t.navbar.catalog}
//             </button>


//           </div>

//         </div>
//         <FabricSpecifications/>
//         <AvailableColors/>

//       </div>
//     </Container>

//     </section>
//   );
// }


// export default CollectionDetails;


// // import { useParams } from "react-router-dom";

// // import { collections } from "@/data/collections";

// // import en from "@/locales/en";
// // import fa from "@/locales/fa";

// // import { useLanguage } from "@/hooks/useLanguage";

// // import ImageViewer from "@/components/ImageViewer/ImageViewer";
// // import Container from "@/container/Container";

// // import FabricSpecifications from "@/components/FabricSpecifications/FabricSpecifications";
// // import AvailableColors from "@/components/AvailableColors/AvailableColors";

// // import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";


// // function CollectionDetails() {

// //   const { key } = useParams();

// //   const { language } = useLanguage();


// //   const t = language === "fa" ? fa : en;


// //   const collection = collections.find(
// //     item => item.key === key
// //   );


// //   if(!collection){

// //     return(

// //       <div className="py-20 text-center">

// //         {language==="fa"
// //         ? "کالکشن پیدا نشد"
// //         : "Collection not found"}

// //       </div>

// //     )

// //   }



// //   const details =
// //     t.collectionDetails[collection.key];



// // return (

// // <section className="py-20">


// // <Container>


// // <div
// // className="
// // grid
// // items-center
// // gap-10
// // md:grid-cols-2
// // "
// // >


// // {/* Image */}

// // <ImageViewer

// // image={collection.image}

// // alt={details.title}

// // />



// // {/* Content */}

// // <div
// // className={`
// // ${language==="fa"
// // ?"text-right"
// // :"text-left"
// // }
// // `}
// // >


// // <h1
// // className="
// // text-4xl
// // font-bold
// // text-neutral-900
// // "
// // >

// // {details.title}

// // </h1>



// // <p
// // className="
// // mt-6
// // text-lg
// // leading-8
// // text-neutral-600
// // "
// // >

// // {details.description}

// // </p>



// // <div className="mt-8">


// // <WhatsAppButton

// // label={t.fabric.requestCatalog}

// // message={details.title}

// // />


// // </div>



// // </div>


// // </div>



// // <FabricSpecifications/>


// // <AvailableColors/>



// // </Container>


// // </section>

// // )

// // }


// // export default CollectionDetails;




import { useParams } from "react-router-dom";

import { collections } from "@/data/collections";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";

import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Container from "@/container/Container";
import FabricSpecifications from "@/components/FabricSpecifications/FabricSpecifications";
import AvailableColors from "@/components/AvailableColors/AvailableColors";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import SEO from "@/components/SEO/SEO";


function CollectionDetails() {

  const { key } = useParams();

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  const collection = collections.find(
    (item) => item.key === key
  );


  if (!collection) {

    return (

      <div
        className={`
          flex
          min-h-[60vh]
          items-center
          justify-center
          ${language === "fa"
            ? "font-fa"
            : "font-en"
          }
        `}
      >

        <p className="text-xl text-neutral-600">

          {language === "fa"
            ? "کالکشن پیدا نشد"
            : "Collection not found"
          }

        </p>

      </div>

    );

  }


  const details =
    t.collectionDetails[collection.key];


  const seoTitle =
    language === "fa"
      ? `${details.title} | K.B.N`
      : `${details.title} | K.B.N Upholstery Fabrics`;


  const seoDescription =
    details.description;


  const whatsappMessage =
    language === "fa"
      ? `سلام، درباره کالکشن ${details.title} اطلاعات بیشتری می‌خواهم.`
      : `Hello, I would like more information about the ${details.title} collection.`;


  return (

    <>

      <SEO
        title={seoTitle}
        description={seoDescription}
      />


      <Container>

        <div
          className="
            mx-auto
            px-4
            py-16
          "
        >

          <div
            className="
              grid
              items-center
              gap-10
              md:grid-cols-2
            "
          >

            {/* Image */}

            <ImageViewer
              image={collection.image}
              alt={details.title}
            />


            {/* Content */}

            <div
              className={
                language === "fa"
                  ? "text-right"
                  : "text-left"
              }
            >

              <h1
                className="
                  text-4xl
                  font-bold
                  text-neutral-900
                "
              >
                {details.title}
              </h1>


              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-neutral-600
                "
              >
                {details.description}
              </p>


              <div className="mt-8">

                <WhatsAppButton
                  label={t.fabric.requestCatalog}
                  message={whatsappMessage}
                />

              </div>

            </div>

          </div>


          <FabricSpecifications />


          <AvailableColors />


        </div>

      </Container>

    </>

  );

}


export default CollectionDetails;