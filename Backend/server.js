import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import resolvers from "./src/resolvers/index.js";
import mongoose from "mongoose";
import config from "./config.js";

const typesArray = loadFilesSync(`./src/schema/*.graphql`);

// Load schema from multiple files
const typeDefs = mergeTypeDefs(typesArray);

// Connect to MongoDB
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log("🚀 MongoDB connected 🚀");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit the process if the database connection fails
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

try {
  const { url } = await startStandaloneServer(server, {
    listen: { port: config.PORT },
  });
  console.log(`🚀 Server ready at ${url}`);
} catch (error) {
  console.error("❌ Apollo Server startup error:", error);
  process.exit(1); // Exit the process if the server fails to start
}
