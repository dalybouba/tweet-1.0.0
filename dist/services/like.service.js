"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const util_1 = require("../utils/util");
const Like_entity_1 = require("../entity/Like.entity");
class LikeService {
    constructor() {
        this.likes = Like_entity_1.LikeEntity;
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
    async findAllLike() {
        const likeRepository = typeorm_1.getRepository(this.likes);
        const likes = await likeRepository.find({ relations: ["user", "tweet"] });
        return likes;
    }
    async findLikeById(likeId) {
        if (util_1.isEmpty(likeId))
            throw new HttpException_1.default(400, "You're not tweetId");
        const likeRepository = typeorm_1.getRepository(this.likes);
        const findLike = await likeRepository.find({
            where: { id: likeId },
            relations: ["user", "tweet"],
        });
        if (!findLike)
            throw new HttpException_1.default(409, "You're not tweet");
        return findLike;
    }
    async findLikeByPrams(userId, tweetId) {
        if (util_1.isEmpty(tweetId))
            throw new HttpException_1.default(400, "You're not tweetId");
        const likeRepository = typeorm_1.getRepository(this.likes);
        const findLike = await likeRepository.find({
            where: {
                userId: userId,
                tweetId: tweetId,
            },
            relations: ["user", "tweet"],
        });
        if (!findLike)
            throw new HttpException_1.default(409, "You're not like any things");
        return findLike;
    }
    async createLike(likeData) {
        if (util_1.isEmpty(likeData))
            throw new HttpException_1.default(400, "You're not tweetData");
        const likeRepository = typeorm_1.getRepository(this.likes);
        const createLikeData = await likeRepository.save(Object.assign({}, likeData));
        console.log("test01", createLikeData);
        return createLikeData;
    }
}
exports.default = LikeService;
//# sourceMappingURL=like.service.js.map