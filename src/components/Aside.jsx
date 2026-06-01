import React from "react";
import PokemonDetail from "./PokemonDetail";

const Aside = ({ pokemon, isLoading }) => {
  return (
    <section className="hidden lg:block sticky top-0 h-screen  relative">
      <article
        className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${pokemon && !isLoading ? "translate-x-0" : "translate-x-full"}`}
      >
        <PokemonDetail pokemon={pokemon} />
      </article>
      <article
        className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-500 ${pokemon ? "translate-x-full" : "translate-x-0"}`}
      >
        <header className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[70%] scale-90">
          <img src="rai.png"></img>
        </header>
        <span className="text-lg text-slate-400 px-20">
          Select a Pokemon to display here.
        </span>
      </article>
      {/*Loader */}
      <div className="w-[70px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animated-spin">
        <img
          className="contrast-50 animate-[spin_2.5s_linear_infinite]"
          src="/pokeball.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Aside;
