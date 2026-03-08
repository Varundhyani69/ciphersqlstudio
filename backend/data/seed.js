import mongoose from "mongoose";
import dotenv from "dotenv";
import assignments from "./sample.js";
import AssignmentSchema from "../models/AssignmentSchema.js";
dotenv.config({ path: "../.env" });

const seedDatabase = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        await AssignmentSchema.deleteMany();

        await AssignmentSchema.insertMany(assignments);

        console.log("Assignments Seeded Successfully");

        process.exit();

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDatabase();