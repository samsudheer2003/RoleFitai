import React, { useState } from "react";

export default function ProfileInput({ onAnalyze }) {
  const [url, setUrl] = useState("");
  const [role, setRole] = useState("backend_python");

  return (
    <div
      style={{
        background: "white",
        padding: "30px",
        width: "100%",
        maxWidth: "480px",
        borderRadius: "14px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
      }}
    >
      <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>
        Analyze GitHub Profile
      </h2>

      <input
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
        placeholder="https://github.com/username"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <select
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "6px",
        }}
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="backend_python">Backend Python</option>
      </select>

      <button
        style={{
          width: "100%",
          padding: "14px",
          background: "#2563eb",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => onAnalyze(url, role)}
      >
        Analyze
      </button>
    </div>
  );
}
