import express from "express";
import { generateHint } from "../controllers/hintController.js";

const router = express.Router();

router.post("/", generateHint);

export default router;