"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = async (req, res, next) => {
    // try {
    //   const Authorization = req.cookies['Authorization'] || req.header('Authorization').split('Bearer ')[1] || null;
    //   if (Authorization) {
    //     const secretKey: string = config.get('secretKey');
    //     const verificationResponse = (await jwt.verify(Authorization, secretKey)) as DataStoredInToken;
    //     const userId = verificationResponse.id;
    //     const userRepository = getRepository(UserEntity);
    //     const findUser = await userRepository.findOne(userId, { select: ['id', 'email', 'password'] });
    //     if (findUser) {
    //       req.user = findUser;
    //       next();
    //     } else {
    //       next(new HttpException(401, 'Wrong authentication token'));
    //     }
    //   } else {
    //     next(new HttpException(404, 'Authentication token missing'));
    //   }
    // } catch (error) {
    //   next(new HttpException(401, 'Wrong authentication token'));
    // }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map