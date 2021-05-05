"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const tslib_1 = require("tslib");
const config_1 = tslib_1.__importDefault(require("config"));
const path_1 = tslib_1.__importDefault(require("path"));
const { host, user, password, database } = config_1.default.get('dbConfig');
exports.dbConnection = {
    type: 'mysql',
    host: host,
    port: 3306,
    username: user,
    password: password,
    database: database,
    synchronize: true,
    logging: false,
    entities: [path_1.default.join(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [path_1.default.join(__dirname, '../**/*.migration{.ts,.js}')],
    subscribers: [path_1.default.join(__dirname, '../**/*.subscriber{.ts,.js}')],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
    },
};
//# sourceMappingURL=index.js.map