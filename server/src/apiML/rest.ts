import axios from "axios";

const API_BASE_URL = "https://api.mercadolibre.com/";

// sites/MLA/search?q=:query
// items/:id
// eslint-disable-next-line no-irregular-whitespace
// items/:id​

const rest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default rest;
