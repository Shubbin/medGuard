// code to push nafdac data from terminal to database: npm run nafdac

import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "fs";
import { Drug } from "../models/drugs.models.js";

// Resolve root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env file from root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

if (!process.env.MONGO_URI) {
  console.error(" MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

// Connect to Mongo
await mongoose.connect(process.env.MONGO_URI);

// Read and insert the data
const rawData = fs.readFileSync(path.resolve(__dirname, "../Nafdac_data/nafdac_greenbook.json"), "utf-8");
const drugs = JSON.parse(rawData);
await Drug.insertMany(drugs);

console.log(` Imported ${drugs.length} drug records to MongoDB.`);
await mongoose.disconnect();
console.log(" MongoDB disconnected.");
process.exit();
