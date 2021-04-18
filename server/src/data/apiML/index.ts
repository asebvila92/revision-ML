import { AxiosResponse } from "axios";
import apiML from "./rest";
import { SearchResultML, ItemResultML, descriptionResultML } from "./types";
import ApiError from "../../utils/error";

export const searchML = async (params) => {
  try {
    const url = "sites/MLA/search";
    const { data }: AxiosResponse<SearchResultML> = await apiML.get(url, { params });
    return data;
  } catch (error) {
    const { status, data } = error.response;
    throw new ApiError(data.message, status);
  }
};

export const getItemByIdML = async (id: string) => {
  try {
    const url = `items/${id}`;

    const itemPromise: Promise<AxiosResponse<ItemResultML>> = apiML.get(url);
    const descriptionPromise: Promise<AxiosResponse<descriptionResultML>> = apiML.get(`${url}/description`);

    const result = await Promise.all([itemPromise, descriptionPromise]);
    return { ...result[0].data, ...result[1].data };
  } catch (error) {
    const { status, data } = error.response;
    throw new ApiError(data.message, status);
  }
};
