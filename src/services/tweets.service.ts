
import { getRepository } from 'typeorm';
import HttpException from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { TweetEntity } from '@entity/Tweet.entity';
import { Tweet } from '@interfaces/tweet.interface';

class TweetService {
  public tweets = TweetEntity;

  public async findAllTweet(): Promise<Tweet[]> {
    const tweetRepository = getRepository(this.tweets);
    const tweets: Tweet[] = await tweetRepository.find({ relations: ["user"] });
    return tweets;
  }

  public async findTweetById(tweetId: number): Promise<Tweet> {
    if (isEmpty(tweetId)) throw new HttpException(400, "You're not tweetId");

    const tweetRepository = getRepository(this.tweets);
    const findTweet: Tweet = await tweetRepository.findOne({ where: { id: tweetId } });
    if (!findTweet) throw new HttpException(409, "You're not tweet");

    return findTweet;
  }

  public async createTweet(tweetData: any): Promise<Tweet> {
    if (isEmpty(tweetData)) throw new HttpException(400, "You're not tweetData");

    const tweetRepository = getRepository(this.tweets);
    // const findUser: User = await userRepository.findOne({ where: { email: userData.email } });
    // if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

    // const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createTweetData: Tweet = await tweetRepository.save({ ...tweetData});
console.log("test01",createTweetData)
    return createTweetData;
  }

  public async updateTweet(tweetId: number,tweetData:Tweet): Promise<Tweet> {
    if (isEmpty(tweetData)) throw new HttpException(400, "You're not Tweet Data");
    const tweetRepository = getRepository(this.tweets);
    const findTweet: Tweet = await tweetRepository.findOne({ where: { id: tweetId } });
    if (!findTweet) throw new HttpException(409, "You're not a tweet");
    await tweetRepository.update(tweetId, { ...tweetData});
   
    const updateTweet: Tweet = await tweetRepository.findOne({ where: { id: tweetId } });
    return updateTweet;
  }

  public async deleteTweet(tweetId: number): Promise<Tweet> {
    if (isEmpty(tweetId)) throw new HttpException(400, "You're not tweetId");

    const tweetRepository = getRepository(this.tweets);
    const findTweet: Tweet = await tweetRepository.findOne({ where: { id: tweetId } });
    if (!findTweet) throw new HttpException(409, "You're not a tweet");

    await tweetRepository.delete({ id: tweetId });
    return findTweet;
  }
}

export default TweetService;
