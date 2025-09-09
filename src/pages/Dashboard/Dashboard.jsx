import { Outlet, NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Depósito</h1>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>

      </nav>
      <Outlet />
    </div>
  );
}
