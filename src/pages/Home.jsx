import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{padding: "24px"}}>
      <h1>Welcome to Booxi</h1>
      <p>Your smart scheduling for accountants & services.</p>
      <div style={{marginTop: 16}}>
        <Link to="/book" style={{background:"#107C84", color:"#fff", padding:"10px 14px", borderRadius:8, textDecoration:"none"}}>
          Book a meeting
        </Link>
      </div>
    </main>
  );
}
