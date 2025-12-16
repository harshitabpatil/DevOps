// src/components/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import config from "../config/routeConfig";

const Menu = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        {config.menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
