import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconSearch } from "@tabler/icons-react";
import PokemonList from "./PokemonList";
const Pokemons = () => {
  const [allpokemons, setAllPokemons] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            type="text"
            placeholder="Search your Pokemon"
            className="outline-none flex-1"
          ></input>{" "}
          <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={allpokemons} />
    </section>
  );
};

export default Pokemons;
