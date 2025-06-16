import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme; // apply class to body
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/auth");
  };

  return (
    <nav
      style={{
        backgroundColor: theme === "light" ? "#f2f2f2" : "#0d1b2a",
        color: theme === "light" ? "#000" : "#fff",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/dashboard"
          style={{
            color: theme === "light" ? "#007bff" : "#00d9ff",
            textDecoration: "none",
          }}
        >
          📘 My Dashboard
        </Link>
      </h2>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          onClick={toggleTheme}
          style={{
            background: theme === "light" ? "#000" : "#fff",
            color: theme === "light" ? "#fff" : "#000",
            border: "none",
            padding: "6px 12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <button
          onClick={handleLogout}
          style={{
            background: theme === "light" ? "#007bff" : "#00d9ff",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🚪 Logout
        </button>
      </div>
    </nav>
  );
}
