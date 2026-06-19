import { useMemo, useState } from "react";

function EmployeeManagementSystem() {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    department: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setEmployee((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!employee.name || !employee.designation || !employee.salary)
      return;

    if (editId !== null) {
      setEmployees((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...employee } : item
        )
      );
      setEditId(null);
    } else {
      setEmployees((prev) => [
        ...prev,
        { id: Date.now(), ...employee },
      ]);
    }

    setEmployee({
      name: "",
      designation: "",
      department: "",
      salary: "",
    });
  };

  const handleEdit = (emp) => {
    setEmployee(emp);
    setEditId(emp.id);
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  const totalSalary = useMemo(() => {
    return employees.reduce(
      (acc, emp) => acc + Number(emp.salary || 0),
      0
    );
  }, [employees]);

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 p-6 shadow-2xl shadow-blue-950/30">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Employee Management System
        </h1>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search employee by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full rounded-xl bg-slate-800 px-4 py-3 outline-none"
        />

        {/* FORM */}
        <div className="grid gap-4 md:grid-cols-4">
          <input
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Name"
            className="rounded-xl bg-slate-800 px-4 py-3"
          />

          <input
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="rounded-xl bg-slate-800 px-4 py-3"
          />

          <input
            name="department"
            value={employee.department}
            onChange={handleChange}
            placeholder="Department"
            className="rounded-xl bg-slate-800 px-4 py-3"
          />

          <input
            name="salary"
            type="number"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="rounded-xl bg-slate-800 px-4 py-3"
          />
        </div>

        <button
          onClick={handleSubmit}
          className={`mt-4 rounded-xl px-6 py-3 font-medium ${
            editId !== null
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {editId !== null ? "Update Employee" : "Add Employee"}
        </button>

        {/* STATS */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="rounded-xl bg-slate-800 px-4 py-2">
            Total Employees: {employees.length}
          </div>

          <div className="rounded-xl bg-slate-800 px-4 py-2">
            Total Salary: ₹{totalSalary}
          </div>
        </div>

        {/* LIST */}
        <div className="mt-6 space-y-3">
          {filteredEmployees.length === 0 ? (
            <div className="rounded-xl bg-slate-800 p-4 text-center text-slate-300">
              No Employees Found
            </div>
          ) : (
            filteredEmployees.map((emp) => (
              <div
                key={emp.id}
                className="flex flex-col gap-3 rounded-xl bg-slate-800 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold">
                    {emp.name}
                  </h2>
                  <p className="text-sm text-slate-300">
                    {emp.designation} | {emp.department}
                  </p>
                  <p className="text-sm text-slate-400">
                    ₹{emp.salary}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(emp)}
                    className="rounded-lg bg-amber-500 px-4 py-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="rounded-lg bg-red-500 px-4 py-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagementSystem;