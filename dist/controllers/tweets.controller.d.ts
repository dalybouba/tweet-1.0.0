import { NextFunction, Request, Response } from 'express';
import TweetService from '../services/tweets.service';
declare class TweetsController {
    tweetService: TweetService;
    getTweets: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTweetsById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createTweet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateTweet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteTweet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAlltweets: (req: Request, res: Response) => Promise<void>;
}
export default TweetsController;
