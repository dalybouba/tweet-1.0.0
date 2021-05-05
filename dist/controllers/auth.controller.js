"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = tslib_1.__importDefault(require("../services/auth.service"));
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                const signUpUserData = await this.authService.signup(userData);
                const token = jsonwebtoken_1.sign({
                    id: signUpUserData.id,
                }, 'a');
                delete signUpUserData.password;
                res.status(201).send(Object.assign(Object.assign({}, signUpUserData), { token }));
            }
            catch (error) {
                next(error);
            }
        };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { cookie, findUser } = await this.authService.login(userData);
                const token = jsonwebtoken_1.sign({
                    email: userData.email,
                }, 'a');
                console.log("back2", findUser);
                // delete signUpUserData.password;
                res.status(201).send(Object.assign(Object.assign({}, findUser), { token }));
                console.log("back4", findUser, token);
            }
            catch (error) {
                next(error);
            }
        };
        this.logOut = async (req, res, next) => {
            try {
                const userData = req.user;
                const logOutUserData = await this.authService.logout(userData);
                res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
                res.status(200).json({ data: logOutUserData, message: 'logout' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map