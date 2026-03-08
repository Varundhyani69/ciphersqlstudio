import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export const generateHint = async (req, res) => {
    try {
        const { question, userQuery } = req.body;

        const prompt = `
You are helping a student learn SQL.

SQL Question:
${question}

Student Query:
${userQuery || "No query written yet"}

Give a short hint.
Do NOT give the full SQL solution.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
        });

        const hint = response.text;

        res.json({ hint });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate hint" });
    }
};