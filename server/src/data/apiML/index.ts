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
  const itemResult: AxiosResponse<ItemResultML> = await apiML.get(url);
  const descriptionResult: AxiosResponse<descriptionResultML> = await apiML.get(`${url}/description`);
  return { ...itemResult.data, ...descriptionResult.data };
};
