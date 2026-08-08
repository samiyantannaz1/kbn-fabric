import type { Collection } from "@/types/collection";

import en from "@/locales/en";
import fa from "@/locales/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";


type Props = {
  collection: Collection;
};


function CollectionCard({
  collection,
}: Props) {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  const item =
    t.collections.items[collection.key];


  return (
    // <div
    //   className="
    //     overflow-hidden
    //     rounded-3xl
    //     bg-white
    //     shadow-sm
    //     transition
    //     duration-300
    //     hover:-translate-y-2
    //     hover:shadow-xl
    //   "
    // >

    //   <img
    //     src={collection.image}
    //     alt={item.title}
    //     className="
    //       h-72
    //       w-full
    //       object-cover
    //     "
    //   />


    //   <div className="p-6">

    //     <h3
    //       className="
    //         text-xl
    //         font-semibold
    //         text-neutral-900
    //       "
    //     >
    //       {item.title}
    //     </h3>


    //     <p
    //       className="
    //         mt-3
    //         leading-7
    //         text-neutral-600
    //       "
    //     >
    //       {item.description}
    //     </p>

    //   </div>

    // </div>

    <Link
  to={`/collections/${collection.key}`}
  className="
    block
    overflow-hidden
    rounded-3xl
    bg-white
    shadow-sm
    transition
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
>
  
  <img
    src={collection.image}
    alt={item.title}
    className="
      h-72
      w-full
      object-cover
    "
  />

  <div className="p-6">

    <h3 className="text-xl font-semibold">
      {item.title}
    </h3>

    <p className="mt-3 text-neutral-600">
      {item.description}
    </p>

  </div>

</Link>
  );
}


export default CollectionCard;