import mongoose from "mongoose";

const drugSchema = new mongoose.Schema({
  product_name: String,
  active_ingredients: String,
  product_category: String,
  nrn: String,
  form: String,
  roa: String,
  strengths: String,
  applicant_name: String,
  approval_date: Date,
  status: String,
}, { timestamps: true });

export const Drug = mongoose.model("Drug", drugSchema);
