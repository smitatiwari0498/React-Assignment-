import { useState } from "react";

function StudentCardGenerator() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        mobile: "",
        gender: "",
        course: "",
        semester: "",
        section: "",
        dob: "",
        address: "",
        image: "",
    });

    const [students, setStudents] = useState([]);

    const handleChange = (e) => {
        setStudent((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleAddStudent = () => {
        if (!student.name || !student.course) return;

        const rollNo = `${student.course.toUpperCase()}-${new Date().getFullYear()}-${String(
            students.length + 1
        ).padStart(3, "0")}`;

        const newStudent = {
            id: Date.now(),
            rollNo,
            ...student,
        };

        setStudents((prev) => [...prev, newStudent]);

        setStudent({
            name: "",
            email: "",
            mobile: "",
            gender: "",
            course: "",
            semester: "",
            section: "",
            dob: "",
            address: "",
            image: "",
        });
    };

    const handleDeleteStudent = (id) => {
        setStudents((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-950 p-6">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-3xl bg-slate-900 p-6 shadow-2xl shadow-blue-950/30">
                    <h1 className="mb-6 text-center text-3xl font-bold text-white">
                        Student Card Generator
                    </h1>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Student Name"
                            value={student.name}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={student.email}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />

                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={student.mobile}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />

                        <select
                            name="gender"
                            value={student.gender}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                        <input
                            type="text"
                            name="course"
                            placeholder="Course"
                            value={student.course}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />

                        <input
                            type="text"
                            name="semester"
                            placeholder="Semester"
                            value={student.semester}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />

                        <input
                            type="text"
                            name="section"
                            placeholder="Section"
                            value={student.section}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />

                        <input
                            type="date"
                            name="dob"
                            value={student.dob}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />

                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={student.image}
                            onChange={handleChange}
                            className="rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                        />
                    </div>

                    <textarea
                        name="address"
                        placeholder="Address"
                        value={student.address}
                        onChange={handleChange}
                        rows="3"
                        className="mt-4 w-full rounded-xl bg-slate-800 px-4 py-3 text-white outline-none"
                    />

                    <button
                        onClick={handleAddStudent}
                        className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Add Student
                    </button>
                </div>

                <div className="mt-8">
  <h2 className="mb-5 text-2xl font-bold text-white">
    Students ({students.length})
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {students.map((item) => (
      <div
        key={item.id}
        className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-blue-950/20"
      >
        <img
          src={
            item.image ||
            "https://via.placeholder.com/400x300?text=Student"
          }
          alt={item.name}
          className="h-52 w-full object-cover"
        />

        <div className="p-5">
          <div className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            {item.rollNo}
          </div>

          <h3 className="mb-4 text-xl font-bold text-white">
            {item.name}
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-slate-800 p-3">
              <p className="text-slate-400">Mobile</p>
              <p className="font-medium text-white">{item.mobile}</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3">
              <p className="text-slate-400">Gender</p>
              <p className="font-medium text-white">{item.gender}</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3">
              <p className="text-slate-400">Course</p>
              <p className="font-medium text-white">{item.course}</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3">
              <p className="text-slate-400">Semester</p>
              <p className="font-medium text-white">{item.semester}</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3">
              <p className="text-slate-400">Section</p>
              <p className="font-medium text-white">{item.section}</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3">
              <p className="text-slate-400">DOB</p>
              <p className="font-medium text-white">{item.dob}</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-slate-800 p-3">
            <p className="text-slate-400">Email</p>
            <p className="truncate text-white">{item.email}</p>
          </div>

          <div className="mt-3 rounded-xl bg-slate-800 p-3">
            <p className="text-slate-400">Address</p>
            <p className="line-clamp-2 text-white">
              {item.address}
            </p>
          </div>

          <button
            onClick={() => handleDeleteStudent(item.id)}
            className="mt-4 w-full rounded-xl bg-red-600 py-2.5 text-white hover:bg-red-700"
          >
            Delete Student
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
        </div>
    );
}

export default StudentCardGenerator;