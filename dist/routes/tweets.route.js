"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const tweets_controller_1 = tslib_1.__importDefault(require("../controllers/tweets.controller"));
class TweetsRoute {
    constructor() {
        this.path = '/tweets';
        this.router = express_1.Router();
        this.tweetsController = new tweets_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.tweetsController.getTweets);
        this.router.get(`${this.path}/:page/:pageSize/allTweets`, this.tweetsController.getAlltweets);
        this.router.get(`${this.path}/:id(\\d+)`, this.tweetsController.getTweetsById);
        this.router.post(`${this.path}`, this.tweetsController.createTweet);
        this.router.put(`${this.path}/:id(\\d+)`, this.tweetsController.updateTweet);
        this.router.delete(`${this.path}/:id(\\d+)`, this.tweetsController.deleteTweet);
    }
}
exports.default = TweetsRoute;
//# sourceMappingURL=tweets.route.js.map