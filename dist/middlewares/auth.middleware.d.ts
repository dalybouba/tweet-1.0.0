import { RequestWithUser } from '../interfaces/auth.interface';
declare const authMiddleware: (req: RequestWithUser, res: any, next: any) => Promise<void>;
export default authMiddleware;
