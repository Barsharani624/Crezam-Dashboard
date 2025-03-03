import { useState } from "react";
import "../styles/styles.css";

export default function Dashboard() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = () => {
    if (/^\d{12}$/.test(number)) {
      setMessage("✅ Number is valid!");
    } else {
      setMessage("❌ Number must be exactly 12 digits.");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <input type="text" placeholder="Enter 12-digit number" value={number} onChange={(e) => setNumber(e.target.value)} maxLength="12" />
      <button onClick={handleVerify}>Verify</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}
