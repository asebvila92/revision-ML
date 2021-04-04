import axios from "axios";
import { API_BASE_URL } from "../config/appConstants";

const rest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export type ApiResponse<T> = {
  responseMessage: string;
  responseCode: number;
  responseContent?: T;
};

export default rest;
