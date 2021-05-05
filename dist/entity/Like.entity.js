"use strict";
var LikeEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const Tweet_entity_1 = require("./Tweet.entity");
let LikeEntity = LikeEntity_1 = class LikeEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], LikeEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], LikeEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => LikeEntity_1, like => like.user),
    tslib_1.__metadata("design:type", users_entity_1.UserEntity)
], LikeEntity.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => LikeEntity_1, like => like.tweets),
    tslib_1.__metadata("design:type", Tweet_entity_1.TweetEntity)
], LikeEntity.prototype, "tweets", void 0);
LikeEntity = LikeEntity_1 = tslib_1.__decorate([
    typeorm_1.Entity()
], LikeEntity);
exports.LikeEntity = LikeEntity;
//# sourceMappingURL=Like.entity.js.map