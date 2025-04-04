import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  team1: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
  team2: { type: mongoose.Schema.Types.ObjectId, ref: "Team", required: true },
  date: { type: String, required: true },
  status: {
    type: String,
    enum: ["SCHEDULED", "COMPLETED", "CANCELLED"],
    default: "SCHEDULED",
  },
});

export const Match = mongoose.model("Match", matchSchema);