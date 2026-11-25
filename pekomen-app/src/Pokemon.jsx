function Pokemon({ pokemon }) {
  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>

      <p>Weight: {pokemon.weight / 10} kg</p>

      <p>Height: {pokemon.height / 10} m</p>
    </div>
  );
}

export default Pokemon;