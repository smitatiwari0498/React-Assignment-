import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoApp() {
  // Input field value
  const [task, setTask] = useState("");

  // Store all todos
  const [todos, setTodos] = useState([]);

  // Track which todo is being edited
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!task.trim()) return;

    // UPDATE TODO
    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId
            ? { ...todo, title: task }
            : todo
        )
      );

      setEditId(null);
    }
    // ADD TODO
    else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: task,
        },
      ]);
    }

    setTask("");
  };

  // Fill input with selected todo data
  const handleEdit = (todo) => {
    setTask(todo.title);
    setEditId(todo.id);
  };

  // DELETE TODO
  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );

    if (editId === id) {
      setEditId(null);
      setTask("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-slate-800 p-6 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Todo CRUD App
        </h1>

        <div className="mb-6 flex gap-3">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 rounded-lg bg-slate-700 px-4 py-3 text-white placeholder:text-slate-400 outline-none shadow-md focus:bg-slate-600"
          />

          <button
            onClick={handleSubmit}
            className={`rounded-lg px-5 py-3 font-medium text-white shadow-lg transition ${editId !== null
                ? "bg-amber-500 hover:bg-amber-600"
                : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {editId !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* READ TODO */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <div className="rounded-xl bg-slate-700 py-4 text-center text-slate-300 shadow-md">
              No Tasks Found
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between rounded-xl bg-slate-700 px-4 py-2.5 shadow-md transition hover:bg-slate-600"
              >
                <h3 className="font-medium text-white">
                  {todo.title}
                </h3>

                <div className="flex gap-2">
                  {/* EDIT TODO */}
                  <button
                    onClick={() => handleEdit(todo)}
                    className="rounded-lg bg-amber-500 p-2.5 text-white shadow-md transition hover:bg-amber-600"
                  >
                    <FaEdit />
                  </button>

                  {/* DELETE TODO */}
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="rounded-lg bg-rose-500 p-2.5 text-white shadow-md transition hover:bg-rose-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 rounded-xl bg-slate-700 p-4 shadow-md">
          <p className="text-slate-200">
            <strong>Total Tasks:</strong> {todos.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;