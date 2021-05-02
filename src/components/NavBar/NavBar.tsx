import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const items = [
  { label: "home", path: "/" },
  { label: "me", path: "/aboutme" },
  { label: "algorithms", path: "/algorithms" },
  { label: "games", path: "/games" },
];

const NavBar: FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <nav className="nav">
      {items.map((item) => (
        <div className="nav-item-wrapper">
          <Link
            className={
              location.pathname === item.path ? "nav-item active" : "nav-item"
            }
            to={item.path}
          >
            {item.label}
          </Link>
          <span
            className={
              location.pathname === item.path ? "long-stick" : "short-stick"
            }
          ></span>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
