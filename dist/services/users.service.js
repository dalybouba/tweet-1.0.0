"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entity/users.entity");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const util_1 = require("../utils/util");
class UserService {
    constructor() {
        this.users = users_entity_1.UserEntity;
    }
    async findAllUser() {
        const userRepository = typeorm_1.getRepository(this.users);
        const users = await userRepository.find({ relations: ["tweets"] });
        return users;
    }
    async findUserById(userId) {
        if (util_1.isEmpty(userId))
            throw new HttpException_1.default(400, "You're not userId");
        const userRepository = typeorm_1.getRepository(this.users);
        const findUser = await userRepository.findOne({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.default(409, "You're not user");
        return findUser;
    }
    async createUser(userData) {
        if (util_1.isEmpty(userData))
            throw new HttpException_1.default(400, "You're not userData");
        const userRepository = typeorm_1.getRepository(this.users);
        const findUser = await userRepository.findOne({ where: { email: userData.email } });
        if (findUser)
            throw new HttpException_1.default(409, `You're email ${userData.email} already exists`);
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        const createUserData = await userRepository.save(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if (util_1.isEmpty(userData))
            throw new HttpException_1.default(400, "You're not userData");
        const userRepository = typeorm_1.getRepository(this.users);
        const findUser = await userRepository.findOne({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.default(409, "You're not user");
        const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
        await userRepository.update(userId, Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        const updateUser = await userRepository.findOne({ where: { id: userId } });
        return updateUser;
    }
    async deleteUser(userId) {
        if (util_1.isEmpty(userId))
            throw new HttpException_1.default(400, "You're not userId");
        const userRepository = typeorm_1.getRepository(this.users);
        const findUser = await userRepository.findOne({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.default(409, "You're not user");
        console.log("userid", userId);
        await userRepository.delete({ id: userId });
        return findUser;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map