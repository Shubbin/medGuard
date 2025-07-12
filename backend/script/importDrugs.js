import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Drug } from "../models/Drug.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const rawData = fs.readFileSync("./data/nafdac_drugs.json", "utf-8");
const drugs = JSON.parse(rawData);

await Drug.insertMany(drugs);
console.log("✅ Drugs imported to DB.");
process.exit();
