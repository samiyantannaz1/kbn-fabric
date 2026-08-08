import FilterButton from "./FilterButton";

import { filterTabs, type FilterTab } from "@/data/filterTabs";

import en from "@/locales/en";
import fa from "@/locales/fa";

import { useLanguage } from "@/hooks/useLanguage";


type Props = {
  activeFilter: FilterTab;
  setActiveFilter: (filter: FilterTab) => void;
};


function CollectionsFilter({
  activeFilter,
  setActiveFilter,
}: Props) {

  const { language } = useLanguage();

  const t = language === "fa" ? fa : en;


  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-4
        py-10
      "
    >

      {filterTabs.map((tab) => (

        <FilterButton
          key={tab}
          label={t.filter[tab]}
          active={activeFilter === tab}
          onClick={() => setActiveFilter(tab)}
        />

      ))}

    </div>
  );
}

export default CollectionsFilter;