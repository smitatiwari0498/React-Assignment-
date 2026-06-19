import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">         
          User List (Using useEffect with Fatch API)
        </h2>

        <div className="space-y-3">
          {users.slice(0,5).map((user) => (
            <div
              key={user.id}
              className="rounded-xl bg-slate-800 p-4 shadow-md"
            >
              <h3 className="text-lg font-medium">{user.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;