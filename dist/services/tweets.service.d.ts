import { TweetEntity } from '../entity/Tweet.entity';
import { Tweet } from '../interfaces/tweet.interface';
declare class TweetService {
    tweets: typeof TweetEntity;
    findAllTweet(): Promise<Tweet[]>;
    findTweetById(tweetId: number): Promise<Tweet>;
    createTweet(tweetData: any): Promise<Tweet>;
    updateTweet(tweetId: number, tweetData: Tweet): Promise<Tweet>;
    deleteTweet(tweetId: number): Promise<Tweet>;
}
export default TweetService;
