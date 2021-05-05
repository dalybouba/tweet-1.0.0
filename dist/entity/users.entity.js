"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Tweet_entity_1 = require("./Tweet.entity");
let UserEntity = class UserEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "userName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Tweet_entity_1.TweetEntity, tweet => tweet.user, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "tweets", void 0);
UserEntity = tslib_1.__decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['email'])
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=users.entity.js.map