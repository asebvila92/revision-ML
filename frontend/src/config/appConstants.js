export const API_BASE_URL_DEV = "http://localhost:3001/api/";

export const API_BASE_URL_STAGE = "";

const URLS = {
  DEV: API_BASE_URL_DEV,
  STAGE: API_BASE_URL_STAGE,
};

const { REACT_APP_ENV } = process.env;

export const API_BASE_URL = URLS[REACT_APP_ENV];
