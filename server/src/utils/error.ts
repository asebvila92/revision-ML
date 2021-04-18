interface ApiError extends Error {
  errorCode?: number;
}

class ApiError extends Error {
  constructor(message: string, code: number) {
    super(message);
    this.errorCode = code;
  }
}

export default ApiError;
