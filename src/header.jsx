import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-3">
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700
        rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          <Link to={"/signin"}>Sign in as user</Link>
        </button>
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700
        rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          <Link to={"/signin"} state={{ from: "admin" }}>
            Sign in as admin
          </Link>
        </button>
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700
        rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          <Link to={"/register"}>Register</Link>
        </button>
      </div>
    </div>
  );
}
