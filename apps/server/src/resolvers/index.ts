import { buildSchema } from "type-graphql";
import { UserResolver } from "./userResolver";
import { GraphQLSchema } from "graphql";

export const genSchema = async (): Promise<GraphQLSchema> => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  return schema;
};
