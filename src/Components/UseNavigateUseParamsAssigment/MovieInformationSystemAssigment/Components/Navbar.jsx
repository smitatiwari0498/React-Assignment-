import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 p-5">
      <div className="mx-auto flex max-w-7xl justify-between">
        <h2 className="text-2xl font-bold text-white">
          MovieDB
        </h2>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className="text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className="text-white"
          >
            Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
}