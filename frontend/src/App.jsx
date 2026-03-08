import { BrowserRouter, Routes, Route } from "react-router-dom"
import AssignmentsPage from "./pages/AssignmentsPage"
import AssignmentPage from "./pages/AssignmentPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssignmentsPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/assignment/:id" element={<AssignmentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App