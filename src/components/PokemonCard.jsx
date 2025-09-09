import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemon, showRemoveButton = false, onRemove }) {
  const navigate = useNavigate();

  // Cores por tipo de Pokémon
  const typeColors = {
    electric: "#FFEA00",
    grass: "#4CAF50",
    fire: "#FF7043",
    water: "#42A5F5",
    ghost: "#7E57C2",
    fighting: "#F44336",
    flying: "#F5DEB3",
    ice: "#81D4FA",
    steel: "#B0BEC5",
    ground: "#A1887F",
    normal: "#A8A878",
    fairy: "#F8B9D0",
    rock: "#B8A038",
    psychic: "#F85888",
    dragon: "#7038F8",
    bug: "#A8B820"
  };

  const bgColor = typeColors[pokemon.type.toLowerCase()] || "#fefefe";

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`); 
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        color: "#000",
        border: `2px solid #333`,
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        padding: "1rem",
        textAlign: "center",
        position: "relative",
        cursor: "pointer", // indica que é clicável
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {pokemon.image && (
        <img
          src={pokemon.image}
          alt={pokemon.name}
          style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "0.5rem" }}
        />
      )}

      <h3>{pokemon.name}</h3>
      <p>Lvl: {pokemon.level}</p>
      <p>Type: {pokemon.type}</p>

      {showRemoveButton && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // evita redirecionar ao clicar no botão
            onRemove();
          }}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            border: "none",
            borderRadius: "50%",
            background: "#FF4C4C",
            color: "#fff",
            width: "24px",
            height: "24px",
            cursor: "pointer"
          }}
        >
          X
        </button>
      )}
    </div>
  );
}
