import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [myPokemons, setMyPokemons] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState("");

  // Inicializa favoritos e meus pokémons a partir do localStorage
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const storedMyPokemons = JSON.parse(localStorage.getItem("myPokemons")) || [];
    setFavorites(storedFavs);
    setMyPokemons(storedMyPokemons);
    if (storedMyPokemons.length > 0) setSelectedPokemonId(storedMyPokemons[0].id.toString());
  }, []);

  // Função para favoritar Pokémon selecionado
  const addFavorite = () => {
    const pokemonToAdd = myPokemons.find(p => p.id === Number(selectedPokemonId));
    if (!pokemonToAdd) return;

    if (favorites.some(p => p.id === pokemonToAdd.id)) {
      alert(`${pokemonToAdd.name} já está nos favoritos!`);
      return;
    }
    if (favorites.length >= 6) {
      alert("Você só pode ter até 6 Pokémons favoritos!");
      return;
    }

    const newFavorites = [...favorites, pokemonToAdd];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites)); // garante que salve imediatamente
  };

  // Função para remover Pokémon dos favoritos
  const removeFavorite = (id) => {
    const newFavs = favorites.filter(p => p.id !== id);
    setFavorites(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs)); // garante que salve imediatamente
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Pokémons Favoritos</h1>

      {/* Combobox de seleção */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <select
          value={selectedPokemonId}
          onChange={e => setSelectedPokemonId(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "6px", flex: 1 }}
        >
          {myPokemons.map(p => (
            <option key={p.id} value={p.id}>
              {p.name} (Lvl {p.level})
            </option>
          ))}
        </select>
        <button
          onClick={addFavorite}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Favoritar
        </button>
      </div>

      {/* Grid de favoritos */}
      {favorites.length === 0 ? (
        <p>Nenhum Pokémon favoritado ainda!</p>
      ) : (
        <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
          {favorites.map(p => (
            <PokemonCard 
              key={p.id} 
              pokemon={p} 
              showRemoveButton={true} 
              onRemove={() => removeFavorite(p.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
