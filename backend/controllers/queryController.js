import pool from "../db/postgres.js";

export const executeQuery = async (req, res) => {
    try {

        const { query } = req.body;

        if (!query) {
            return res.status(400).json({
                error: "Query is required"
            });
        }

        const cleanQuery = query.trim().toLowerCase();

        if (!cleanQuery.startsWith("select")) {
            return res.status(400).json({
                error: "Only SELECT queries are allowed"
            });
        }

        const forbidden = [
            "insert",
            "update",
            "delete",
            "drop",
            "alter",
            "create",
            "truncate"
        ];

        for (let word of forbidden) {
            if (cleanQuery.includes(word)) {
                return res.status(400).json({
                    error: "Dangerous query detected"
                });
            }
        }

        const statements = query.split(";").filter(s => s.trim() !== "");

        if (statements.length > 1) {
            return res.status(400).json({
                error: "Multiple queries are not allowed"
            });
        }

        const result = await pool.query(query);

        res.json({
            success: true,
            rowCount: result.rowCount,
            rows: result.rows
        });

    } catch (error) {

        console.error("Query execution error:", error);

        res.status(500).json({
            error: error.message || "Query execution failed"
        });

    }
};