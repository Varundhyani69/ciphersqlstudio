# CipherSQLStudio

CipherSQLStudio is a small SQL practice platform inspired by tools like LeetCode SQL.  
It allows users to practice SQL queries directly in the browser and get instant results from a live database.

The goal of this project was to build a full-stack application that combines database querying, a code editor, and AI-assisted hints in a minimal but functional environment.

---

## Features

- Browse SQL assignments
- Attempt SQL questions in a built-in editor
- Execute queries against a PostgreSQL database
- View results instantly in a table
- Get AI-powered hints when stuck
- Clean minimal interface focused on practicing SQL

---

## Tech Stack

### Frontend
- React (Vite)
- TailwindCSS
- React Router
- Axios
- Monaco Editor

### Backend
- Node.js
- Express

### Databases
- MongoDB Atlas (stores assignments)
- PostgreSQL (Supabase) for executing SQL queries

### AI Integration
- Google Gemini API for generating hints

---

## Project Structure


frontend
├── components
├── pages
├── api
├── redux
└── App.jsx

backend
├── controllers
├── routes
├── models
└── server.js


---

## How It Works

1. Assignments are stored in **MongoDB**.
2. The frontend fetches assignments through the backend API.
3. Users write SQL queries in a **Monaco Editor**.
4. Queries are sent to the backend and executed against a **PostgreSQL database hosted on Supabase**.
5. Results are returned and rendered in a table.
6. If the user requests help, the backend calls the **Gemini API** to generate a hint based on the question and current query.

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Varundhyani69/ciphersqlstudio.git
cd ciphersqlstudio
2. Backend setup
cd backend
npm install

Create .env

PORT=3000
MONGO_URI=your_mongodb_uri
POSTGRES_URI=your_supabase_postgres_uri
GEMINI_API_KEY=your_gemini_api_key

Run backend:

npm run dev
3. Frontend setup
cd frontend
npm install
npm run dev
Notes

I used an LLM to help generate the sample SQL tables and seed data inside Supabase.
All application architecture, backend logic, query execution, frontend implementation, and UI development were implemented by me.

The goal was to use AI as a tool where appropriate while still building the core system manually.

Future Improvements

Some ideas for extending the platform:

SQL auto-completion

Query validation against expected answers

Query history

Leaderboard or scoring system

Authentication for tracking progress

More advanced assignments

Purpose of the Project

This project was built primarily to:

Practice full-stack development

Work with both MongoDB and PostgreSQL in the same application

Integrate an LLM into a developer tool

Build a small but practical learning platform


---
