import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
    title: String,
    description: String,
    difficulty: String,
    question: String,
    tables: [String]
});

export default mongoose.model("Assignment", AssignmentSchema);