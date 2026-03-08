import { Router } from "express";
import { getAssignments, getAssignmentsById } from "../controllers/assignmentController.js";

const router = Router();
router.get("/", getAssignments);
router.get("/:id", getAssignmentsById);

export default router;