import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";

export default function StudentManagement() {
  return (
    <BrowserRouter>
      <nav className="flex gap-5 bg-gray-900 p-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route
          path="/student/:id"
          element={<StudentDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}