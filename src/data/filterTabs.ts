export const filterTabs = [
  "all",
  "boucle",
  "velvet",
  "woven",
] as const;

export type FilterTab = (typeof filterTabs)[number];