import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav>
      <NavLink
        to="/"
        end
        className={({ isActive }) => `nav-card ${isActive ? "active" : ""}`}
      >
        Home
      </NavLink>

      <NavLink
        to="/favorites"
        end
        className={({ isActive }) => `nav-card ${isActive ? "active" : ""}`}
      >
        Time
      </NavLink>

      {isAuthenticated && (
        <>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) => `nav-card ${isActive ? "active" : ""}`}
          >
            Depósito
          </NavLink>

          {role === "superuser" && (
            <NavLink
              to="/settings"  // ← atualizado para a rota independente
              end
              className={({ isActive }) => `nav-card ${isActive ? "active" : ""}`}
            >
              Configurações
            </NavLink>
          )}

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}

      {!isAuthenticated && (
        <NavLink
          to="/login"
          end
          className={({ isActive }) => `nav-card ${isActive ? "active" : ""}`}
        >
          Login
        </NavLink>
      )}
    </nav>
  );
}
