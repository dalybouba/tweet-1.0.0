import userService from '../services/users.service';
declare class UsersController {
    userService: userService;
    getUsers: (req: any, res: any, next: any) => Promise<void>;
    getUserById: (req: any, res: any, next: any) => Promise<void>;
    createUser: (req: any, res: any, next: any) => Promise<void>;
    updateUser: (req: any, res: any, next: any) => Promise<void>;
    deleteUser: (req: any, res: any, next: any) => Promise<void>;
}
export default UsersController;
