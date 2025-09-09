import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyPokemons from "./pages/Dashboard/MyPokemons";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  // Não exibir Navbar na tela de login
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Rota pública */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas gerais */}
        <Route
          path="/"
          element={<ProtectedRoute allowedRoles={["superuser", "user"]} />}
        >
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />

          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MyPokemons />} />
            <Route path="mypokemons" element={<MyPokemons />} />
          </Route>
        </Route>

        {/* Settings como rota independente, só superuser */}
        <Route
          path="/settings"
          element={<ProtectedRoute allowedRoles={["superuser"]} />}
        >
          <Route index element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// Envolvendo App com BrowserRouter aqui
export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
