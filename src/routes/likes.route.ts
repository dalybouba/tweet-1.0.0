import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import TweetsController from '@controllers/tweets.controller';
import LikeController from '@controllers/like.controller';

class LikesRoute implements Route {
  public path = '/Likes';
  public router = Router();
  public likesController = new LikeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.likesController.getLikes);
    // this.router.get(`${this.path}/:idUser/:idTweets/allLikes`, this.likesController.);
    this.router.get(`${this.path}/:id(\\d+)`, this.likesController.getLikesById);
    this.router.post(`${this.path}`, this.likesController.createLike);
    // this.router.put(`${this.path}/:id(\\d+)`, this.likesController.updateTweet);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.likesController.deleteTweet);
  }
}

export default LikesRoute;
