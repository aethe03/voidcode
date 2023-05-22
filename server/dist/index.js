"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const data_source_1 = require("./data-source");
const constants_1 = require("./constants");
const express_1 = __importDefault(require("express"));
const graphql_yoga_1 = require("graphql-yoga");
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const resolvers_1 = require("./resolvers");
data_source_1.db.initialize()
    .then(async () => {
    const app = (0, express_1.default)();
    console.log(await (0, resolvers_1.genSchema)());
    const yoga = (0, graphql_yoga_1.createYoga)({
        graphqlEndpoint: "/api",
    });
    app.use("/api", yoga);
    app.use("/", (0, graphql_playground_middleware_express_1.default)({
        endpoint: "/api",
    }));
    app.listen(constants_1.__port__, () => {
        console.log(`🚀 Server live at http://localhost:${constants_1.__port__}`);
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map