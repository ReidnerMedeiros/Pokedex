import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", user.role); 
      navigate("/dashboard");
    } else {
      setError("Usuário ou senha incorretos!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/imagens/background.jpg')", // Coloque a imagem na pasta public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "1rem"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center"
        }}
      >
        <h1 style={{ marginBottom: "1.5rem", fontWeight: "bold" }}>Login</h1>

        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            boxSizing: "border-box"
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            boxSizing: "border-box"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#FF0000",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={e => (e.target.style.backgroundColor = "#cc0000")}
          onMouseOut={e => (e.target.style.backgroundColor = "#FF0000")}
        >
          Entrar
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "1rem", fontWeight: "bold" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
