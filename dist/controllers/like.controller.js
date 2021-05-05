"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const like_service_1 = tslib_1.__importDefault(require("../services/like.service"));
class LikeController {
    constructor() {
        this.likeService = new like_service_1.default();
        this.getLikes = async (req, res, next) => {
            try {
                const findAllLikesData = await this.likeService.findAllLike();
                res.status(200).json({ data: findAllLikesData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getLikesById = async (req, res, next) => {
            try {
                const likeId = Number(req.params.id);
                const findOneLikeData = await this.likeService.findLikeById(likeId);
                res.status(200).json({ data: findOneLikeData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createLike = async (req, res, next) => {
            try {
                const likeData = req.body;
                const createLikeData = await this.likeService.createLike(likeData);
                res.status(201).json({ data: createLikeData, message: 'created' });
            }
            catch (error) {
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
}
exports.default = LikeController;
//# sourceMappingURL=like.controller.js.map