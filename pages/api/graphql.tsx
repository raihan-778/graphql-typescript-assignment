import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const typeDefs = ` #graphql
  type Query {
    title: String
    name: string
  }
`;
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);
