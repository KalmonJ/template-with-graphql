import { ApolloServer, BaseContext } from "@apollo/server";
import resolvers from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

export const initializeServer = () => {
  const start = () => {
    const server = new ApolloServer<BaseContext>({
      resolvers: resolvers,
      typeDefs,
    });

    return server;
  };

  return {
    start,
  };
};
