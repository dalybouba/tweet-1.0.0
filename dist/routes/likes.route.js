"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const like_controller_1 = tslib_1.__importDefault(require("../controllers/like.controller"));
class LikesRoute {
    constructor() {
        this.path = '/Likes';
        this.router = express_1.Router();
        this.likesController = new like_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.likesController.getLikes);
        // this.router.get(`${this.path}/:idUser/:idTweets/allLikes`, this.likesController.);
        this.router.get(`${this.path}/:id(\\d+)`, this.likesController.getLikesById);
        this.router.post(`${this.path}`, this.likesController.createLike);
        // this.router.put(`${this.path}/:id(\\d+)`, this.likesController.updateTweet);
        // this.router.delete(`${this.path}/:id(\\d+)`, this.likesController.deleteTweet);
    }
}
exports.default = LikesRoute;
//# sourceMappingURL=likes.route.js.map