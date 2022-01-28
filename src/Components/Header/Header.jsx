import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/list'>To Do List</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
}
