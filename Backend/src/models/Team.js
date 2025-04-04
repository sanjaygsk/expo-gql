import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["MI", "CSK", "RCB", "KKR", "DC", "SRH", "PBKS", "RR", "GT", "LSG"],
    required: true,
  },
});

export const Team = mongoose.model("Team", teamSchema);