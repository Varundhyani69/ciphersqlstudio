import AssignmentSchema from "../models/AssignmentSchema.js";

export const getAssignments = async (req, res) => {
    try {
        const assignments = await AssignmentSchema.find();
        res.json(assignments);
    } catch (error) {
        console.log(error);
    }
}

export const getAssignmentsById = async (req, res) => {
    try {
        const id = req.params.id;
        const assignment = await AssignmentSchema.findById(id);
        res.json(assignment);
    } catch (error) {
        console.log(error);
    }
}