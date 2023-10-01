export class AppError extends Error {
  private statusCode: number;
  private errorCode: number;
  constructor(message: string, statusCode: number, errorCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
