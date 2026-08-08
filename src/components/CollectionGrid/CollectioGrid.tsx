import CollectionCard from "@/components/CollectionCard/CollectionCard";

import { collections } from "@/data/collections";

import type { FilterTab } from "@/data/filterTabs";


type Props = {
  activeFilter: FilterTab;
};


function CollectionGrid({
  activeFilter,
}: Props) {


  const filteredCollections =
    activeFilter === "all"
      ? collections
      : collections.filter(
          (item) =>
            item.key === activeFilter
        );


  return (
    <div
      className="
        grid
        gap-8
        px-4
        pb-20
        md:grid-cols-2
        lg:grid-cols-3
      "
    >

      {filteredCollections.map(
        (collection) => (

          <CollectionCard
            key={collection.id}
            collection={collection}
          />

        )
      )}

    </div>
  );
}


export default CollectionGrid;
