import { RequestWithUser } from '../interfaces/auth.interface';
import AuthService from '../services/auth.service';
declare class AuthController {
    authService: AuthService;
    signUp: (req: any, res: any, next: any) => Promise<void>;
    logIn: (req: any, res: any, next: any) => Promise<void>;
    logOut: (req: RequestWithUser, res: any, next: any) => Promise<void>;
}
export default AuthController;
