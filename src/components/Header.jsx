import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={{padding: "12px 16px", borderBottom: "1px solid #eee"}}>
      <div style={{display: "flex", alignItems: "center", gap: 16}}>
        <Link to="/" style={{textDecoration: "none", color: "#107C84", fontWeight: 700}}>
          BOOXI
        </Link>
        <nav style={{display: "flex", gap: 12}}>
          <NavLink to="/" style={{textDecoration: "none"}}>Home</NavLink>
          <NavLink to="/book" style={{textDecoration: "none"}}>Book</NavLink>
          <NavLink to="/admin" style={{textDecoration: "none"}}>Admin</NavLink>
        </nav>
      </div>
    </header>
  );
}
