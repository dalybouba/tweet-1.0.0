"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const util_1 = require("../utils/util");
const Tweet_entity_1 = require("../entity/Tweet.entity");
class TweetService {
    constructor() {
        this.tweets = Tweet_entity_1.TweetEntity;
    }
    async findAllTweet() {
        const tweetRepository = typeorm_1.getRepository(this.tweets);
        const tweets = await tweetRepository.find({ relations: ["user"] });
        return tweets;
    }
    async findTweetById(tweetId) {
        if (util_1.isEmpty(tweetId))
            throw new HttpException_1.default(400, "You're not tweetId");
        const tweetRepository = typeorm_1.getRepository(this.tweets);
        const findTweet = await tweetRepository.findOne({ where: { id: tweetId } });
        if (!findTweet)
            throw new HttpException_1.default(409, "You're not tweet");
        return findTweet;
    }
    async createTweet(tweetData) {
        if (util_1.isEmpty(tweetData))
            throw new HttpException_1.default(400, "You're not tweetData");
        const tweetRepository = typeorm_1.getRepository(this.tweets);
        // const findUser: User = await userRepository.findOne({ where: { email: userData.email } });
        // if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);
        // const hashedPassword = await bcrypt.hash(userData.password, 10);
        const createTweetData = await tweetRepository.save(Object.assign({}, tweetData));
        console.log("test01", createTweetData);
        return createTweetData;
    }
    async updateTweet(tweetId, tweetData) {
        if (util_1.isEmpty(tweetData))
            throw new HttpException_1.default(400, "You're not Tweet Data");
        const tweetRepository = typeorm_1.getRepository(this.tweets);
        const findTweet = await tweetRepository.findOne({ where: { id: tweetId } });
        if (!findTweet)
            throw new HttpException_1.default(409, "You're not a tweet");
        await tweetRepository.update(tweetId, Object.assign({}, tweetData));
        const updateTweet = await tweetRepository.findOne({ where: { id: tweetId } });
        return updateTweet;
    }
    async deleteTweet(tweetId) {
        if (util_1.isEmpty(tweetId))
            throw new HttpException_1.default(400, "You're not tweetId");
        const tweetRepository = typeorm_1.getRepository(this.tweets);
        const findTweet = await tweetRepository.findOne({ where: { id: tweetId } });
        if (!findTweet)
            throw new HttpException_1.default(409, "You're not a tweet");
        await tweetRepository.delete({ id: tweetId });
        return findTweet;
    }
}
exports.default = TweetService;
//# sourceMappingURL=tweets.service.js.map