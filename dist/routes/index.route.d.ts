import IndexController from '../controllers/index.controller';
import Route from '../interfaces/routes.interface';
declare class IndexRoute implements Route {
    path: string;
    router: any;
    indexController: IndexController;
    constructor();
    private initializeRoutes;
}
export default IndexRoute;
