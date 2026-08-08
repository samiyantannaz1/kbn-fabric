export type CollectionKey =
  | "boucle"
  | "velvet"
  | "woven";

export interface Collection {
  id: number;
  key: CollectionKey;
  image: string;
}