// adminCreate.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User } from "../models/user.model.js";

dotenv.config();


const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  console.error(" MONGO_URI is not defined. Please check your .env file.");
  process.exit(1);
}

const adminEmail = "david.tomi2020@gmail.com";
const adminPassword = "Welcome123.";
const adminRole = "admin";

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log("⚠️ Admin user already exists:", adminEmail);
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);

    const adminUser = new User({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: adminRole,
      isVerified: true,
    });

    await adminUser.save();
    console.log("✅ Admin user created successfully:", adminEmail);
    process.exit(0);
  } catch (error) {
    console.error(" Error creating admin user:", error);
    process.exit(1);
  }
}

createAdmin();
