import axios from "axios";

const API_BASE_URL = "https://api.mercadolibre.com/";

const rest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default rest;
