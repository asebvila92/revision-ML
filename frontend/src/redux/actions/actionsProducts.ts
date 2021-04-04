import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import rest, { ApiResponse } from "../../rest";

import { GET_PRODUCTS_SUCCESS } from "../constants";

export const getProducts = () => async (dispatch: Dispatch<any>) => {
  const url = "/";
  try {
    const { data }: AxiosResponse<ApiResponse<[]>> = await rest.get(url);
    const actionData = data?.responseContent;
    const action = { type: GET_PRODUCTS_SUCCESS, data: actionData };
    dispatch(action);
  } catch (error) {
    //do something;
    console.log(error);
  }
};
