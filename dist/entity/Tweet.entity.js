"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const Like_entity_1 = require("./Like.entity");
let TweetEntity = class TweetEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], TweetEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], TweetEntity.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], TweetEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], TweetEntity.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => users_entity_1.UserEntity, user => user.tweets, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", users_entity_1.UserEntity)
], TweetEntity.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Like_entity_1.LikeEntity, like => like.tweets),
    tslib_1.__metadata("design:type", Array)
], TweetEntity.prototype, "likes", void 0);
TweetEntity = tslib_1.__decorate([
    typeorm_1.Entity()
], TweetEntity);
exports.TweetEntity = TweetEntity;
//# sourceMappingURL=Tweet.entity.js.map