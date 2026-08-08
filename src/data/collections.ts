import type { Collection } from "../types/collection";

import boucleImage from "@/assets/images/collection/col1.jpg";
import velvetImage from "@/assets/images/collection/col2.jpg";
import wovenImage from "@/assets/images/collection/col3.jpg";

export const collections: Collection[] = [
  {
    id: 1,
    key: "boucle",
    image: boucleImage,
  },
  {
    id: 2,
    key: "velvet",
    image: velvetImage,
  },
  {
    id: 3,
    key: "woven",
    image: wovenImage,
  },

];