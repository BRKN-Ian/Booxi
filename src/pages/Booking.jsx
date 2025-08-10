import React, { useState } from "react";

const slots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

export default function Booking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <main style={{padding: "24px"}}>
      <h2>Book a Meeting</h2>

      <div style={{marginTop: 12}}>
        <label style={{display:"block", marginBottom: 6}}>Choose a date</label>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
      </div>

      <div style={{marginTop: 12}}>
        <label style={{display:"block", marginBottom: 6}}>Choose a time</label>
        <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
          {slots.map(s => (
            <button
              key={s}
              onClick={()=>setTime(s)}
              style={{
                padding:"8px 12px",
                borderRadius:8,
                border:"1px solid #ddd",
                background: time===s ? "#107C84" : "#fff",
                color: time===s ? "#fff" : "#333",
                cursor:"pointer"
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {date && time && (
        <div style={{marginTop: 16, padding: 12, border:"1px solid #eee", borderRadius:8}}>
          <strong>Summary</strong>
          <div>Date: {date}</div>
          <div>Time: {time}</div>
        </div>
      )}
    </main>
  );
}
