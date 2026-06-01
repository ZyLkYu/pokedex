import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { IconSearch } from "@tabler/icons-react";
import PokemonList from "./PokemonList";
import { useIntersectionObserver } from "../hooks/UseIntersectionObserver";
const INITIAL_LIMIT = 40;
const INCREASE_LIMIT = 20;
const Pokemons = () => {
  const [allpokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const pokemonsByName = allpokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName),
  );
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const { ref: targetObserver, isIntersecting: isVisible } =
    useIntersectionObserver({
      threshold: 0,
    });
  const handleChangePokemonName = (e) =>
    setPokemonName(e.target.value.toLowerCase());

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const maxPokemons = pokemonsByName.length;
    if (isVisible && maxPokemons != 0) {
      const newLimit = limit + INCREASE_LIMIT;
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
      setLimit(newLimit);
    }
  }, [isVisible]);

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [pokemonName]);

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            type="text"
            placeholder="Search your Pokemon"
            autoComplete="off"
            className="outline-none flex-1"
            name="pokemonName"
            onChange={handleChangePokemonName}
          ></input>{" "}
          <button
            type="button"
            className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors"
          >
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />
      {/*Target observer*/}
      <span ref={targetObserver}></span>
    </section>
  );
};

export default Pokemons;

//formas no controlada
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setPokemonName(e.target.pokemonName.value.toLowerCase);
// };
