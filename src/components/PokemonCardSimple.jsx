import React from "react";

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
  normal: "#A8A77A",    
  fairy: "#F8BBD0",     
  rock: "#B6A136",      
  psychic: "#F95587", 
  dragon: "#7038F8",
  bug: "#A6B91A"  
};

export default function PokemonCardSimple({ pokemon }) {
  const bgColor = typeColors[pokemon.type.toLowerCase()] || "#fefefe";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        border: "2px solid #333",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        padding: "1rem",
        textAlign: "center",
        transition: "transform 0.2s, box-shadow 0.2s"
      }}
    >
      {pokemon.image && (
        <img
          src={pokemon.image}
          alt={pokemon.name}
          style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "0.5rem" }}
        />
      )}
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.type}</p>
    </div>
  );
}
