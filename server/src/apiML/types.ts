export type ApiResponse<T> = {
  responseMessage: string;
  responseCode: number;
  responseContent?: T;
};
