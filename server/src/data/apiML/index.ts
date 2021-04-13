import { AxiosResponse } from "axios";
import apiML from "./rest";
import { SearchResultML, ItemResultML, descriptionResultML } from "./types";

export const searchML = async (params) => {
  const url = "sites/MLA/search";
  const { data }: AxiosResponse<SearchResultML> = await apiML.get(url, { params });
  return data;
};

export const getItemByIdML = async (id: string) => {
  const url = `items/${id}`;

  const itemPromise: Promise<AxiosResponse<ItemResultML>> = apiML.get(url);
  const descriptionPromise: Promise<AxiosResponse<descriptionResultML>> = apiML.get(`${url}/description`);

  const result = await Promise.all([itemPromise, descriptionPromise]);
  return { ...result[0].data, ...result[1].data };
};
