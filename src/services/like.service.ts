
import { getRepository } from 'typeorm';
import HttpException from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { TweetEntity } from '@entity/Tweet.entity';
import { Tweet } from '@interfaces/tweet.interface';
import { LikeEntity } from '@entity/Like.entity';
import { Like } from '@interfaces/like.interface';

class LikeService {
  public likes = LikeEntity;

  public async findAllLike(): Promise<Like[]> {
    const likeRepository = getRepository(this.likes);
    const likes: Like[] = await likeRepository.find({ relations: ["user","tweet"] });
    return likes;
  }

  public async findLikeById(likeId: number): Promise<Like[]> {
    if (isEmpty(likeId)) throw new HttpException(400, "You're not tweetId");

    const likeRepository = getRepository(this.likes);
    const findLike: Like[] = await likeRepository.find({         
      where: { id: likeId } ,
      relations: ["user", "tweet"],
    });
    if (!findLike) throw new HttpException(409, "You're not tweet");

    return findLike;
  }
  public async findLikeByPrams(userId:number,tweetId:number): Promise<Like[]> {
    if (isEmpty(tweetId)) throw new HttpException(400, "You're not tweetId");
    const likeRepository = getRepository(this.likes);
    const findLike: Like[] = await likeRepository.find({         
      where: {         
          userId: userId,
          tweetId: tweetId,         
        } ,
      relations: ["user", "tweet"],
    });
    if (!findLike) throw new HttpException(409, "You're not like any things");
    return findLike;
  }

  public async createLike(likeData: any): Promise<Like> {
    if (isEmpty(likeData)) throw new HttpException(400, "You're not tweetData");

    const likeRepository = getRepository(this.likes);
    const createLikeData: Like = await likeRepository.save({ ...likeData});
     console.log("test01",createLikeData)
    return createLikeData;
  }

//   public async updateTweet(tweetId: number,tweetData:Tweet): Promise<Tweet> {
//     if (isEmpty(tweetData)) throw new HttpException(400, "You're not Tweet Data");
//     const tweetRepository = getRepository(this.tweets);
//     const findTweet: Tweet = await tweetRepository.findOne({ where: { id: tweetId } });
//     if (!findTweet) throw new HttpException(409, "You're not a tweet");
//     await tweetRepository.update(tweetId, { ...tweetData});
   
//     const updateTweet: Tweet = await tweetRepository.findOne({ where: { id: tweetId } });
//     return updateTweet;
//   }

//   public async deleteTweet(tweetId: number): Promise<Tweet> {
//     if (isEmpty(tweetId)) throw new HttpException(400, "You're not tweetId");

//     const tweetRepository = getRepository(this.tweets);
//     const findTweet: Tweet = await tweetRepository.findOne({ where: { id: tweetId } });
//     if (!findTweet) throw new HttpException(409, "You're not a tweet");

//     await tweetRepository.delete({ id: tweetId });
//     return findTweet;
//   }
}

export default LikeService;
