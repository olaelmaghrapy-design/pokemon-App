import { useState, useEffect } from "react";
import Pokemon from  "./Pokemon";
function PokemonApplication() {
  const [pokemons, setpokemons] = useState([]);
  const [selectedPokemon, setselectedPokemon] = useState("");
  const [PokemonDetails, setpokemonDetails] = useState(null);
  


  useEffect(() => {
    // Simulate fetching Pokemon data
     fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) => response.json()).then((data) => 
      setpokemons(data.results));
    
  }, []);
function getPokemon() {
    if (!selectedPokemon) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`).then((response) => response.json()).then((data) => {
      setpokemonDetails(data);
    });
  }
  return (
    <div>
      <h1>Pokemon Application</h1>
      <p>Number of Pokemon: {pokemons.length}</p>
        <select
         id="pokemon"
        name="pokemon"
        value={selectedPokemon} onChange={(e) => setselectedPokemon(e.target.value)}>
          <option value="">Select a Pokemon</option>
          {pokemons.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={getPokemon}>Get pokemon</button>
        {PokemonDetails && <Pokemon pokemon={PokemonDetails} />}
      {/* Add your Pokemon application content here */}
    </div>
  );
}
export default PokemonApplication;