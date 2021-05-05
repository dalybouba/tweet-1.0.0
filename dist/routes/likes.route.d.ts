import Route from '../interfaces/routes.interface';
import LikeController from '../controllers/like.controller';
declare class LikesRoute implements Route {
    path: string;
    router: any;
    likesController: LikeController;
    constructor();
    private initializeRoutes;
}
export default LikesRoute;
