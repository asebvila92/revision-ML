export type Breadcrumb = string[];

export type Search = {
  term?: string;
  categories: Breadcrumb;
  items: Item[];
};

export type ResultGetItem = {
  categories: Breadcrumb;
  item: Item;
};

export type SearchItemAction = {
  type: "SEARCH_ITEM";
  data: Search;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
};

type Price = {
  currency: string;
  amount: number;
  decimals: number;
};
