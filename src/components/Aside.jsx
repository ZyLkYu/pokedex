import React from "react";
import PokemonDetail from "./PokemonDetail";

const Aside = ({ pokemon, isLoading }) => {
  const hasPokemon = !!pokemon?.id;

  return (
    <section className="hidden lg:block sticky top-0 h-screen relative">
      {/* Detalle del Pokémon */}
      <article
        className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${
          hasPokemon && !isLoading ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>

      {/* Pantalla inicial */}
      <article
        className={`absolute z-20 bottom-0 bg-white w-full h-[85%]
        rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center
        transition-all duration-500 ${
          hasPokemon ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <header className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[70%] scale-90">
          <img src="/rai.png" alt="Raichu" />
        </header>

        <span className="text-lg text-slate-400 px-20">
          Select a Pokemon to display here.
        </span>
      </article>

      {/* Loader */}
      {isLoading && (
        <div className="w-[70px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
          <img
            className="contrast-50 animate-[spin_2.5s_linear_infinite]"
            src="/pokeball.png"
            alt="Loading"
          />
        </div>
      )}
    </section>
  );
};

export default Aside;
