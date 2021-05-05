import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import tweetService from '@services/users.service';
import TweetService from '@services/tweets.service';
import { Tweet } from '@interfaces/tweet.interface';
import { Connection, getRepository, Repository } from 'typeorm';
import { TweetEntity } from '@entity/Tweet.entity';
import LikeService from '@services/like.service';
import { Like } from '@interfaces/like.interface';

class LikeController {
  public likeService = new LikeService();

  public getLikes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllLikesData: Like[] = await this.likeService.findAllLike();
      res.status(200).json({ data: findAllLikesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getLikesById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const likeId = Number(req.params.id);
      const findOneLikeData: Like[] = await this.likeService.findLikeById(likeId);

      res.status(200).json({ data: findOneLikeData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createLike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const likeData: any = req.body;
      const createLikeData: Like = await this.likeService.createLike(likeData);

      res.status(201).json({ data: createLikeData, message: 'created' },);
     
    } catch (error) {
      
      next(error);
    }
  };

//   public updateTweet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const tweetId = Number(req.params.id);
//       const tweetData: Tweet = req.body;
//       const updateTweetData: Tweet = await this.tweetService.updateTweet(tweetId, tweetData);

//       res.status(200).json({ data: updateTweetData, message: 'updated' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public deleteTweet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const tweetId = Number(req.params.id);
//       const deleteTweetData: Tweet = await this.tweetService.deleteTweet(tweetId);

//       res.status(200).json({ data: deleteTweetData, message: 'deleted' });
//     } catch (error) {
//       next(error);
//     }
//   };

// public getAlltweets=  async (req: Request, res: Response) => {
//   let options = {}
//   if (req.query.s) {
//       options = {
//           ...options,
//           where: {
//               $or: [
//                 { relations: ["user"] },
//                   {title: new RegExp(req.query.s.toString(), 'i')},
//                   {description: new RegExp(req.query.s.toString(), 'i')}
                  
//               ]
//           }
//       }
//   }

//   if (req.query.sort) {
//       options = {
//           ...options,
//           order: {
//           //  id: req.query.sort.toString().toUpperCase()
//           createdAt:"DESC"
//           }
//       }
//   }

//   const tweetRepository = getRepository(TweetEntity);
//   const tweets: Tweet[] = await tweetRepository.find({ relations: ["user"] });
//   const page: number = parseInt(req.params.page as any || 1);
//   console.log("page",page)
//   const numb:any = req.params;
//   console.log('numb',numb);

//   const take = parseInt(numb.pageSize.replace( /[^\d\.]*/g, ''));
// console.log('take',take);
// console.log('param',req.params);


// console.log(take)
//   const total = await tweetRepository.count();

//   const data = await tweetRepository.find({
//     relations: ["user"],
//     order: {
//       //  id: req.query.sort.toString().toUpperCase()
//       createdAt:"DESC"
//       },
//     ...options,
//       take,
//       skip: (page) * take,
      
//   });

//   res.json({
//       data,
//       total,
//       page,
//       last_page: Math.ceil(total / take)
//   })
// }










}

export default LikeController;
