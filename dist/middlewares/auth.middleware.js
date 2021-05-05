"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = tslib_1.__importDefault(require("config"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entity/users.entity");
const HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
const authMiddleware = async (req, res, next) => {
    try {
        const Authorization = req.cookies['Authorization'] || req.header('Authorization').split('Bearer ')[1] || null;
        if (Authorization) {
            const secretKey = config_1.default.get('secretKey');
            const verificationResponse = (await jsonwebtoken_1.default.verify(Authorization, secretKey));
            const userId = verificationResponse.id;
            const userRepository = typeorm_1.getRepository(users_entity_1.UserEntity);
            const findUser = await userRepository.findOne(userId, { select: ['id', 'email', 'password'] });
            if (findUser) {
                req.user = findUser;
                next();
            }
            else {
                next(new HttpException_1.default(401, 'Wrong authentication token'));
            }
        }
        else {
            next(new HttpException_1.default(404, 'Authentication token missing'));
        }
    }
    catch (error) {
        next(new HttpException_1.default(401, 'Wrong authentication token'));
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map