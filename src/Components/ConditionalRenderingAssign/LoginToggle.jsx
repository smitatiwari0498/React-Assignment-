import { useState } from "react";

const user = {
  username: "admin",
  password: "1234",
};

function LoginToggle() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (
      username === user.username &&
      password === user.password
    ) {
      setIsLoggedIn(true); 
    } else {
      alert("Invalid Username or Password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");  
    setPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {!isLoggedIn ? (
          <>
            <h2 className="mb-6 text-center text-3xl font-bold text-slate-800">
              Login Form
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <button
                onClick={handleLogin}
                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white hover:bg-blue-600"
              >
                Login
              </button>
            </div>

            <div className="mt-6 rounded-lg bg-slate-100 p-3 text-center text-sm">
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Password:</strong> {user.password}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User"
                className="mx-auto h-24 w-24 rounded-full"
              />
            </div>

            <h2 className="mb-3 text-center text-3xl font-bold text-slate-800">
              Welcome {user.username} 👋
            </h2>

            <p className="mb-6 text-center text-slate-500">
              You are successfully logged in.
            </p>

            <button
              onClick={handleLogout}
              className="w-full rounded-lg bg-red-500 py-3 font-semibold text-white hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginToggle;