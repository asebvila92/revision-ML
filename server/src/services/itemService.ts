import { searchML, getItemByIdML } from "../data/apiML";
import { CategoryML, FilterML, ItemResultML } from "../data/apiML/types";
import { SearchResponse, Item, ItemResponse } from "../models";
import { getCategoryFilter, getBreadcrumb, getAuthor } from "../utils/itemUtils";

const searchCategory = async (categoryId: string) => {
  const resultCategory = await searchML({ category: categoryId });
  const { filters } = resultCategory;

  let breadcrumb: string[] = [];

  const categoryFilter: FilterML = getCategoryFilter(filters);
  breadcrumb = getBreadcrumb(categoryFilter);
  return breadcrumb;
};

const processResultsSearch = (items: ItemResultML[]): Item[] => {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      amount: item.price,
      currency: item.currency_id,
      decimals: 0,
    },
    picture: item.thumbnail || "",
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  }));
};

export const searchItem = async (searchInput: string): Promise<SearchResponse> => {
  const resultSearch = await searchML({ q: searchInput });
  const { filters, available_filters } = resultSearch;

  let breadcrumb: string[] = [];

  if (filters.length > 0) {
    const categoryFilter: FilterML = getCategoryFilter(filters);
    breadcrumb = getBreadcrumb(categoryFilter);
  } else {
    const categoryFilter: FilterML = getCategoryFilter(available_filters);

    if (categoryFilter) {
      let maxResultsOfCategory = 0;
      let categoryIdMaxResults = "";
      categoryFilter.values.forEach((category: CategoryML) => {
        const results = category.results || 0;
        if (results > maxResultsOfCategory) {
          maxResultsOfCategory = results;
          categoryIdMaxResults = category.id;
        }
      });
      breadcrumb = await searchCategory(categoryIdMaxResults);
    }
  }

  return {
    items: processResultsSearch(resultSearch.results.slice(0, 4)),
    categories: breadcrumb,
    author: getAuthor(),
  };
};

export const getItemById = async (id: string): Promise<ItemResponse> => {
  const itemML = await getItemByIdML(id);
  const breadcrumbOfItem = await searchCategory(itemML.category_id);
  const item: Item = {
    id: itemML.id,
    title: itemML.title,
    price: {
      amount: itemML.price,
      currency: itemML.currency_id,
      decimals: 0,
    },
    picture: itemML.pictures[0]?.url || "",
    condition: itemML.condition,
    free_shipping: itemML.shipping.free_shipping,
    sold_quantity: itemML.sold_quantity,
    description: itemML.plain_text || "",
  };

  return {
    author: getAuthor(),
    categories: breadcrumbOfItem,
    item: item,
  };
};
