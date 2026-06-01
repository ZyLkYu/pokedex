import React from "react";
import usePokemonContext from "../hooks/UsePokemonContext";
const Evolutions = ({ evolutions }) => {
  const { showPokemon } = usePokemonContext();
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {evolutions?.map((evolution, index) => (
        <article key={evolution.name} className="flex gap-2 items-center">
          {index !== 0 && (
            <div className="bg-slate-100 p-1 rounded-full text-sm font-bold">
              <span>Lv.{evolution.min_level}</span>
            </div>
          )}

          <button
            onClick={() => showPokemon(evolution.pokemonInfo)}
            className="hover:bg-slate-100 transition-colors rounded-3xl cursor-pointer"
          >
            <img
              className="w-20 h-20 object-contain"
              src={evolution.image}
              alt={evolution.name}
            />
          </button>
        </article>
      ))}
    </div>
  );
};

export default Evolutions;
