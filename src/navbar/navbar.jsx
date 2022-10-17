import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css"

// 1. map all the links instead of separate Link components;
// 2. try NavLinks and add style it;

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/education", title: "Education" } ,
  { path: "/skills", title: "Skills" } ,
  { path: "/projects", title: "Projects" } ,
  
];

function Navbar() {
  // const defaultStyle = {
  //   textDecoration: "none",
  //   color: "black",
  // };

  // const activeStyle = {
  //   textDecoration: "none",
  //   color: "red",
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto"
      }}
    >
      {links.map((link) => (
        <NavLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
