import { FilterML, CategoryML } from "../data/apiML/types";
import { Author } from "../models";

export const getCategoryFilter = (filters: []): FilterML => {
  return filters.find((fil: FilterML) => fil.id === "category");
};

export const getBreadcrumb = (categoryFilter?: FilterML): string[] => {
  let breadcrumb = [];
  if (categoryFilter) {
    const category: CategoryML = categoryFilter.values[0];
    if (category) {
      breadcrumb = category.path_from_root?.map((parentCategory: CategoryML) => parentCategory.name);
    }
  }
  return breadcrumb;
};

export const getAuthor = (): Author => {
  return {
    name: "Andres",
    lastname: "Vila",
  };
};
