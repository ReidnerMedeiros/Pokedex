import { useParams, useNavigate } from "react-router-dom";
import { pokemons } from "../data/pokemons";

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = pokemons.find(p => p.id === parseInt(id));

  if (!pokemon) return <h2>Pokémon não encontrado 😢</h2>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{pokemon.name}</h1>
      <p>Type: {pokemon.type}</p>
      <p>Level: {pokemon.level}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
