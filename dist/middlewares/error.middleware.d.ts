import HttpException from '../exceptions/HttpException';
declare const errorMiddleware: (error: HttpException, req: any, res: any, next: any) => void;
export default errorMiddleware;
