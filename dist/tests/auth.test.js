"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
// import request from 'supertest';
const typeorm_1 = require("typeorm");
const _databases_1 = require("../databases");
const auth_route_1 = tslib_1.__importDefault(require("../routes/auth.route"));
beforeAll(async () => {
    await typeorm_1.createConnection(_databases_1.dbConnection);
});
afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});
describe('Testing Auth', () => {
    describe('[POST] /signup', () => {
        it('response should have the Create userData', async () => {
            const userData = {
                email: 'test@email.com',
                userName: 'test',
                password: 'q1w2e3r4!',
            };
            const authRoute = new auth_route_1.default();
            const users = authRoute.authController.authService.users;
            const userRepository = typeorm_1.getRepository(users);
            userRepository.findOne = jest.fn().mockReturnValue(null);
            userRepository.save = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            // const app = new App([authRoute]);
            // return request(app.getServer()).post(`${authRoute.path}signup`).send(userData).expect(201);
        });
    });
    describe('[POST] /login', () => {
        it('response should have the Set-Cookie header with the Authorization token', async () => {
            const userData = {
                email: 'test@email.com',
                userName: 'test',
                password: 'q1w2e3r4!',
            };
            const authRoute = new auth_route_1.default();
            const users = authRoute.authController.authService.users;
            const userRepository = typeorm_1.getRepository(users);
            userRepository.findOne = jest.fn().mockReturnValue({
                id: 1,
                email: userData.email,
                password: await bcrypt_1.default.hash(userData.password, 10),
            });
            // const app = new App([authRoute]);
            // return request(app.getServer())
            //   .post(`${authRoute.path}login`)
            //   .send(userData)
            //   .expect('Set-Cookie', /^Authorization=.+/);
        });
    });
    // describe('[POST] /logout', () => {
    //   it('logout Set-Cookie Authorization=; Max-age=0', async () => {
    //     const authRoute = new AuthRoute();
    //     const app = new App([authRoute]);
    //     return request(app.getServer())
    //       .post(`${authRoute.path}logout`)
    //       .expect('Set-Cookie', /^Authorization=\;/);
    //   });
    // });
});
//# sourceMappingURL=auth.test.js.map