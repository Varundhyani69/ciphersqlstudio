import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();
const pool = new Pool({
    host: "aws-1-ap-southeast-2.pooler.supabase.com",
    port: 6543,
    database: "postgres",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;