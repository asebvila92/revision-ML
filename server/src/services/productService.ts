import { Data } from "../models/product";

/* all of my product logic */
export const getProduct = (): Data => {
  const data: Data = {
    text: "Test Success!",
  };
  return data;
};
