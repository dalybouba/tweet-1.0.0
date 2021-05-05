import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import TweetsController from '@controllers/tweets.controller';

class TweetsRoute implements Route {
  public path = '/tweets';
  public router = Router();
  public tweetsController = new TweetsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tweetsController.getTweets);
    this.router.get(`${this.path}/:page/:pageSize/allTweets`, this.tweetsController.getAlltweets);
    this.router.get(`${this.path}/:id(\\d+)`, this.tweetsController.getTweetsById);
    this.router.post(`${this.path}`, this.tweetsController.createTweet);
    this.router.put(`${this.path}/:id(\\d+)`, this.tweetsController.updateTweet);
    this.router.delete(`${this.path}/:id(\\d+)`, this.tweetsController.deleteTweet);
  }
}

export default TweetsRoute;
