import { useState, useEffect } from "react";
import { homepokemons } from "../../data/homepokemons";
import PokemonCard from "../../components/PokemonCard";

export default function MyPokemons() {
  const [search, setSearch] = useState("");
  const [myPokemons, setMyPokemons] = useState([]);

  // Inicializa apenas a partir do localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("myPokemons")) || [];
    setMyPokemons(stored);
  }, []);

  // Função para capturar um Pokémon aleatório
  const captureRandomPokemon = () => {
    const randomPokemon = homepokemons[Math.floor(Math.random() * homepokemons.length)];

    // Evita duplicados
    if (!myPokemons.some(p => p.id === randomPokemon.id)) {
      const newList = [...myPokemons, randomPokemon];
      setMyPokemons(newList);
      localStorage.setItem("myPokemons", JSON.stringify(newList)); // salva imediatamente
    } else {
      alert(`${randomPokemon.name} já foi capturado!`);
    }
  };

  // Filtra os Pokémons pelo nome
  const filtered = myPokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Meus Pokémons</h2>

      <button
        onClick={captureRandomPokemon}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Capturar Pokémon
      </button>

      <input
        type="text"
        placeholder="Buscar Pokémon..."
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
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ marginTop: "1rem" }}>Nenhum Pokémon encontrado!</p>
      )}
    </div>
  );
}
