import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

export default function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    
    const handleAuth = async () => {

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      navigate("/dashboard");
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful ✅");
      navigate("/dashboard");
    }
  } catch (err) {
    alert("Error: " + (err as Error).message);
  }
};

  return (
    <div
      style={{
        backgroundImage: "url('https://source.unsplash.com/1920x1080/?cyber,login')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(12px)",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "400px",
          color: "#00d9ff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px", fontSize: "28px" }}>
          {isLogin ? "Login" : "Signup"}
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #00d9ff",
            backgroundColor: "#0d1b2a",
            color: "#fff",
            outline: "none",
            transition: "0.3s ease",
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #00d9ff",
            backgroundColor: "#0d1b2a",
            color: "#fff",
            outline: "none",
            transition: "0.3s ease",
          }}
        />

        <button
          onClick={handleAuth}
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#00d9ff",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            marginBottom: "12px",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
        >
          {isLogin ? "🔓 Login" : "➕ Signup"}
        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          style={{
            cursor: "pointer",
            textAlign: "center",
            color: "#ffffffb3",
            textDecoration: "underline",
          }}
        >
          {isLogin
            ? "Don't have an account? Create one"
            : "Already registered? Login here"}
        </p>
      </div>
    </div>
  );
}
