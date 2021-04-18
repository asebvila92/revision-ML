import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import rest from "../../rest";
import { SEARCH_ITEM } from "../constants";
import { throwError } from "../actions";

export const searchItem = (item: string) => async (dispatch: Dispatch) => {
  const url = "items";
  try {
    const params = { q: item };
    const { data }: AxiosResponse = await rest.get(url, { params });

    if (data.errorCode) {
      return dispatch(throwError({ type: "request", code: data.errorCode, message: "" }));
    }
    const action = { type: SEARCH_ITEM, data: data };
    dispatch(action);
  } catch (error) {
    dispatch(
      throwError({
        type: "request",
        code: 500,
        message: "Algo salio mal, intenta una nueva busqueda",
      })
    );
  }
};

export const getItemById = async (id: string) => {
  const url = "items/";
  try {
    const { data }: AxiosResponse = await rest.get(`${url}${id}`);

    if (data.errorCode) {
      return { type: "request", code: data.errorCode, message: "" };
    }
    return data;
  } catch (error) {
    return { type: "request", code: 500, message: "Algo salio mal, intenta una nueva busqueda" };
  }
};
