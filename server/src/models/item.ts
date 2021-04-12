import { Author } from "./general";

export type SearchResponse = {
  author: Author;
  categories: string[];
  items: Item[];
};

export type ItemResponse = {
  author: Author;
  categories: string[];
  item: Item;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity: number;
  description?: string;
};

export type Price = {
  currency: string;
  amount: number;
};
