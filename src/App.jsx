import { useState, useEffect } from "react";
import {
  getPokemonList,
  getPokemonDescription,
  getPokemonSpriteUrl,
} from "../api/utils";
import Card from "../components/Card";
import Select from "../components/Select";
import logo from "./assets/PokeKerm.png";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(1);
  const [selectedDescription, setSelectedDescription] = useState(
    "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const apiData = await getPokemonList();
      setPokemonList(apiData);
      setIsLoading(false);
    }

    getData();
  }, []);

  function handleClick(event) {
    async function setNewPokemon() {
      const desc = await getPokemonDescription(
        Number(event.target.dataset.pokemon)
      );

      setSelectedPokemon(Number(event.target.dataset.pokemon));
      setSelectedDescription(desc);
    }

    setNewPokemon();
  }

  return (
    <div
      className="pokedex d-flex flex-column fixed-top fixed-bottom bg-primary align-items-center justify-content-start"
      style={{ minHeight: 460 }}
    >
      <div className="mb-2">
        <img src={logo} className="w-100 h-100" />
      </div>

      {!isLoading && (
        <Select
          pokemonList={pokemonList}
          selectedPokemon={selectedPokemon}
          handleClick={handleClick}
        />
      )}

      {!isLoading && (
        <Card
          image={getPokemonSpriteUrl(selectedPokemon)}
          name={pokemonList[selectedPokemon - 1].name}
          description={selectedDescription}
        />
      )}
    </div>
  );
}

export default App;
