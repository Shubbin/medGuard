import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    drugName: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    photo: { type: String }, 
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Report", reportSchema);
