"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.db = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: "postgres",
    password: process.env.DATABASE_PASSWORD,
    database: "postgres",
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map