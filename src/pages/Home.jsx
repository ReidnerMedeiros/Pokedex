import { useState } from "react";
import { homepokemons } from "../data/homepokemons";
import PokemonCardSimple from "../components/PokemonCardSimple";

export default function Home() {
  const [search, setSearch] = useState("");

  // Filtra por nome ou tipo (case insensitive)
  const filtered = homepokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Pokédex</h1>

      <input
        type="text"
        placeholder="Buscar Pokémon por nome ou tipo..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem"
        }}
      >
        {filtered.map(p => (
          <PokemonCardSimple key={p.id} pokemon={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ marginTop: "1rem" }}>Nenhum Pokémon encontrado!</p>
      )}
    </div>
  );
}
