"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const User_1 = require("../entity/User");
const type_graphql_1 = require("type-graphql");
let RecipeResolver = class RecipeResolver {
    async recipe() {
        const recipe = new User_1.Recipe();
        recipe.title = "acsadfsa";
        recipe.description = "acsadfsa";
        recipe.id = "123";
        recipe.ingredients = ["acsadfsa"];
        return recipe;
    }
};
__decorate([
    (0, type_graphql_1.Query)((_returns) => User_1.Recipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipe", null);
RecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)(User_1.Recipe)
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
//# sourceMappingURL=userResolver.js.map