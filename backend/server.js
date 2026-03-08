import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './db/db.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import queryRoutes from './routes/queryRoutes.js';
import hintRoutes from './routes/hintRoutes.js';
const app = express();
const PORT = process.env.PORT;
console.log(process.env.GEMINI_API_KEY);
connectDB();
app.use(cors({
    origin: FRONTEND_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use('/api/assignments', assignmentRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/hint", hintRoutes);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
    app.listen(PORT, async () => {

        console.log("Listening to port", PORT);

    });
})