"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const config_1 = tslib_1.__importDefault(require("config"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entity/users.entity");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const util_1 = require("../utils/util");
class AuthService {
    constructor() {
        this.users = users_entity_1.UserEntity;
    }
    async signup(userData) {
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
    async login(userData) {
        console.log('backend', userData);
        if (util_1.isEmpty(userData))
            throw new HttpException_1.default(400, "You're not userData");
        const userRepository = typeorm_1.getRepository(this.users);
        const findUser = await userRepository.findOne({ where: { email: userData.email } });
        if (!findUser)
            throw new HttpException_1.default(409, `You're email ${userData.email} not found`);
        const isPasswordMatching = await bcrypt_1.default.compare(userData.password, findUser.password);
        if (!isPasswordMatching)
            throw new HttpException_1.default(409, "You're password not matching");
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        console.log("hello", findUser, cookie);
        return { cookie, findUser };
    }
    async logout(userData) {
        if (util_1.isEmpty(userData))
            throw new HttpException_1.default(400, "You're not userData");
        const userRepository = typeorm_1.getRepository(this.users);
        const findUser = await userRepository.findOne({ where: { email: userData.email, password: userData.password } });
        if (!findUser)
            throw new HttpException_1.default(409, "You're not user");
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = { id: user.id };
        const secretKey = config_1.default.get('secretKey');
        const expiresIn = 60 * 60;
        return { expiresIn, token: jsonwebtoken_1.default.sign(dataStoredInToken, secretKey, { expiresIn }) };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map