import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function EmployeeManagement() {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !employee.name ||
      !employee.department ||
      !employee.salary
    ) {
      return;
    }

    if (editId) {
      setEmployees(
        employees.map((item) =>
          item.id === editId
            ? { ...employee, id: editId }
            : item
        )
      );

      setEditId(null);
    } else {
      setEmployees([
        ...employees,
        {
          id: Date.now(),
          ...employee,
        },
      ]);
    }

    setEmployee({
      name: "",
      department: "",
      salary: "",
    });
  };

  const handleEdit = (employee) => {
    setEmployee(employee);
    setEditId(employee.id);
  };

  const handleDelete = (id) => {
    setEmployees(
      employees.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 p-5">
      <div className="mx-auto max-w-6xl rounded-2xl bg-slate-800 p-6 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Employee Management System
        </h1>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Employee Name
            </label>

            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-300">
              Salary
            </label>

            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 px-3 py-2 text-white outline-none"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={handleSubmit}
            className={`rounded-lg px-5 py-2 text-white ${
              editId
                ? "bg-amber-500 hover:bg-amber-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editId ? "Update Employee" : "Add Employee"}
          </button>

          <div className="rounded-lg bg-slate-700 px-4 py-2 text-slate-200">
            Total Employees: {employees.length}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="p-3 text-left text-white">Name</th>
                <th className="p-3 text-left text-white">
                  Department
                </th>
                <th className="p-3 text-left text-white">
                  Salary
                </th>
                <th className="p-3 text-center text-white">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="bg-slate-800 p-5 text-center text-slate-400"
                  >
                    No Employees Found
                  </td>
                </tr>
              ) : (
                employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-t border-slate-700"
                  >
                    <td className="p-3 text-slate-200">
                      {employee.name}
                    </td>

                    <td className="p-3 text-slate-200">
                      {employee.department}
                    </td>

                    <td className="p-3 text-slate-200">
                      ₹{employee.salary}
                    </td>

                    <td className="p-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            handleEdit(employee)
                          }
                          className="rounded-lg bg-amber-500 p-2 text-white"
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(employee.id)
                          }
                          className="rounded-lg bg-rose-500 p-2 text-white"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagement;