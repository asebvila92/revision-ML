export type ApiResponse<T> = {
  responseMessage: string;
  responseCode: number;
  responseContent?: T;
};

//--------------------ML api types--------------------------
export type ErrorApiML = {
  message: string;
  status: number;
};

export type SearchResultML = {
  results: [];
  filters: [];
  available_filters: [];
};

export type descriptionResultML = {
  plain_text: string;
};

export type ItemResultML = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  pictures?: PictureML[];
  thumbnail?: string;
  condition: string;
  category_id: string;
  shipping: {
    free_shipping: boolean;
  };
  sold_quantity: number;
  plain_text?: string;
};

export type FilterML = {
  id: string;
  values: CategoryML[];
};

export type CategoryML = {
  id: string;
  name: string;
  results?: number;
  path_from_root?: CategoryML[];
};

type PictureML = {
  url: string;
};
