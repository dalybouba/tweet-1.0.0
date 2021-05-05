import TweetService from '../services/tweets.service';
declare class TweetsController {
    tweetService: TweetService;
    getTweets: (req: any, res: any, next: any) => Promise<void>;
    getTweetsById: (req: any, res: any, next: any) => Promise<void>;
    createTweet: (req: any, res: any, next: any) => Promise<void>;
    updateTweet: (req: any, res: any, next: any) => Promise<void>;
    deleteTweet: (req: any, res: any, next: any) => Promise<void>;
    getAlltweets: (req: any, res: any) => Promise<void>;
}
export default TweetsController;
