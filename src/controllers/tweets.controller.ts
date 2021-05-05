import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import tweetService from '@services/users.service';
import TweetService from '@services/tweets.service';
import { Tweet } from '@interfaces/tweet.interface';
import { Connection, getRepository, Repository } from 'typeorm';
import { TweetEntity } from '@entity/Tweet.entity';

class TweetsController {
  public tweetService = new TweetService();

  public getTweets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllTweetsData: Tweet[] = await this.tweetService.findAllTweet();
      res.status(200).json({ data: findAllTweetsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getTweetsById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tweetId = Number(req.params.id);
      const findOneTweetData: Tweet = await this.tweetService.findTweetById(tweetId);

      res.status(200).json({ data: findOneTweetData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTweet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tweetData: any = req.body;
      const createTweetData: Tweet = await this.tweetService.createTweet(tweetData);

      res.status(201).json({ data: createTweetData, message: 'created' },);
     
    } catch (error) {
      
      next(error);
    }
  };

  public updateTweet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tweetId = Number(req.params.id);
      const tweetData: Tweet = req.body;
      const updateTweetData: Tweet = await this.tweetService.updateTweet(tweetId, tweetData);

      res.status(200).json({ data: updateTweetData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTweet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tweetId = Number(req.params.id);
      const deleteTweetData: Tweet = await this.tweetService.deleteTweet(tweetId);

      res.status(200).json({ data: deleteTweetData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

public getAlltweets=  async (req: Request, res: Response) => {
  let options = {}
  const tweetRepository = getRepository(TweetEntity);
  const tweets: Tweet[] = await tweetRepository.find({ relations: ["user"] });
  const page: number = parseInt(req.params.page as any || 1);
  const numb:any = req.params;
  const take = parseInt(numb.pageSize.replace( /[^\d\.]*/g, ''));
  const total = await tweetRepository.count();
  const data = await tweetRepository.find({
    relations: ["user"],
    order: {
      //  id: req.query.sort.toString().toUpperCase()
      createdAt:"DESC"
      },
    ...options,
      take,
      skip: (page) * take,
      
  });

  res.json({
      data,
      total,
      page,
      last_page: Math.ceil(total / take)
  })
}










}

export default TweetsController;
