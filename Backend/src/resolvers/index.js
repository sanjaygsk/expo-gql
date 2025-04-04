import { Query } from "./Query.js";
import { Mutation } from "./Mutation.js";
import GraphQLJSON from "graphql-type-json"

// Import your models here to use in the resolvers


const resolvers = {
    JSON: GraphQLJSON,
    // All Get Operations
    Query: {

    },

    // All Post Operations
    Mutation: {
        
    },
}

export default resolvers;