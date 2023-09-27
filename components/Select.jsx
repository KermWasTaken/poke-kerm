function Select({ pokemonList, selectedPokemon, handleClick }) {
  return (
    <div className="dropdown mb-5">
      <button
        className="btn btn-dark dropdown-toggle"
        style={{ width: "200px" }}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {pokemonList[selectedPokemon - 1].name}
      </button>
      <ul className="dropdown-menu scrollable-menu dropdown-menu-dark">
        {pokemonList.map((pokemon, index) => {
          return (
            <li key={index + 1}>
              <button
                onClick={(event) => handleClick(event)}
                className={
                  index + 1 === selectedPokemon
                    ? "dropdown-item active"
                    : "dropdown-item"
                }
                type="button"
                data-pokemon={index + 1}
              >
                {pokemon.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Select;
