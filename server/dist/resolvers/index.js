"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSchema = void 0;
const type_graphql_1 = require("type-graphql");
const userResolver_1 = require("./userResolver");
const genSchema = async () => {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [userResolver_1.RecipeResolver],
    });
    return schema;
};
exports.genSchema = genSchema;
//# sourceMappingURL=index.js.map