import { Query } from "./Query.js";
import { Mutation } from "./Mutation.js";
import { Team } from "../models/Team.js";
import { Match } from "../models/Match.js";
import GraphQLJSON from "graphql-type-json"

const resolvers = {
    JSON: GraphQLJSON,
    Query: {
    getAllTeams: async () => Team.find(),
    getAllMatches: async () => Match.find().populate("team1 team2"),
  },
  Mutation: {
    createTeams: async () => {
      const teamNames = ["MI", "CSK", "RCB", "KKR", "DC", "SRH", "PBKS", "RR", "GT", "LSG"];
      const teams = teamNames.map((name) => ({ name }));
      await Team.insertMany(teams);
      return Team.find();
    },
    createMatches: async () => {
      const teams = await Team.find();
      const matches = [];
      const startDate = new Date("2025-03-20");

      for (let i = 0; i < teams.length; i++) {
        for (let j = i + 1; j < teams.length; j++) {
          matches.push({
            team1: teams[i]._id,
            team2: teams[j]._id,
            date: new Date(startDate.getTime() + matches.length * 24 * 60 * 60 * 1000).toISOString(),
          });
        }
      }

      await Match.insertMany(matches);
      return Match.find().populate("team1 team2");
    }
  },

}

export default resolvers;