export type Breadcrumb = string[];

export type Search = {
  categories: Breadcrumb;
  items: [];
};

export type SearchItemAction = {
  type: "SEARCH_ITEM";
  data: Search;
};
