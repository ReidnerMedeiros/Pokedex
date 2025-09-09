import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Configurações</h2>
      <p>Somente superusuário pode acessar esta página.</p>

      <div style={{ marginTop: "1rem" }}>
        <label>
          Tema atual: <strong>{theme === "light" ? "Claro 🌞" : "Escuro 🌙"}</strong>
        </label>
        <br />
        <button onClick={toggleTheme} style={{ marginTop: "0.5rem" }}>
          Alternar Tema
        </button>
      </div>
    </div>
  );
}
