import Route from '../interfaces/routes.interface';
import TweetsController from '../controllers/tweets.controller';
declare class TweetsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    tweetsController: TweetsController;
    constructor();
    private initializeRoutes;
}
export default TweetsRoute;
