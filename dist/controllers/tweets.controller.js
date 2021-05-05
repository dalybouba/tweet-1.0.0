"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tweets_service_1 = tslib_1.__importDefault(require("../services/tweets.service"));
const typeorm_1 = require("typeorm");
const Tweet_entity_1 = require("../entity/Tweet.entity");
class TweetsController {
    constructor() {
        this.tweetService = new tweets_service_1.default();
        this.getTweets = async (req, res, next) => {
            try {
                const findAllTweetsData = await this.tweetService.findAllTweet();
                res.status(200).json({ data: findAllTweetsData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getTweetsById = async (req, res, next) => {
            try {
                const tweetId = Number(req.params.id);
                const findOneTweetData = await this.tweetService.findTweetById(tweetId);
                res.status(200).json({ data: findOneTweetData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createTweet = async (req, res, next) => {
            try {
                const tweetData = req.body;
                const createTweetData = await this.tweetService.createTweet(tweetData);
                res.status(201).json({ data: createTweetData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateTweet = async (req, res, next) => {
            try {
                const tweetId = Number(req.params.id);
                const tweetData = req.body;
                const updateTweetData = await this.tweetService.updateTweet(tweetId, tweetData);
                res.status(200).json({ data: updateTweetData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteTweet = async (req, res, next) => {
            try {
                const tweetId = Number(req.params.id);
                const deleteTweetData = await this.tweetService.deleteTweet(tweetId);
                res.status(200).json({ data: deleteTweetData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getAlltweets = async (req, res) => {
            let options = {};
            const tweetRepository = typeorm_1.getRepository(Tweet_entity_1.TweetEntity);
            const tweets = await tweetRepository.find({ relations: ["user"] });
            const page = parseInt(req.params.page || 1);
            const numb = req.params;
            const take = parseInt(numb.pageSize.replace(/[^\d\.]*/g, ''));
            const total = await tweetRepository.count();
            const data = await tweetRepository.find(Object.assign(Object.assign({ relations: ["user"], order: {
                    //  id: req.query.sort.toString().toUpperCase()
                    createdAt: "DESC"
                } }, options), { take, skip: (page) * take }));
            res.json({
                data,
                total,
                page,
                last_page: Math.ceil(total / take)
            });
        };
    }
}
exports.default = TweetsController;
//# sourceMappingURL=tweets.controller.js.map