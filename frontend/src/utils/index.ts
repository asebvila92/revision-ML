export const getCurrency = (currency: string) => {
  const moneyValue = currency === "ARS" ? "$" : "U$S";
  return moneyValue;
};

export const getAmount = (amount: number) => {
  const value = String(amount).replace(/\D/g, "");
  return value === "" ? value : Number(value).toLocaleString("de-DE");
};

export const getCondition = (condition: string) => {
  const conditionValue = condition === "used" ? "Usado" : "Nuevo";
  return conditionValue;
};

export const getDecimals = (decimals: number) => {
  return decimals || "00";
};
