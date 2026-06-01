import Pokemons from "./components/Pokemons";
import Aside from "./components/Aside";
import ModalPokemon from "./components/ModalPokemon";
import usePokemonContext from "./hooks/UsePokemonContext";

function App() {
  const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } =
    usePokemonContext();

  return (
    <section className="relative bg-[#F6F8FC] h-screen overflow-y-auto overflow-x-hidden">
      <img
        src="/pokeball.png"
        alt=""
        className="absolute top-[-100px] left-[-100px] w-[500px] opacity-10 grayscale brightness-150 pointer-events-none"
      />

      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] relative z-10">
        <Pokemons />
        <Aside pokemon={pokemonDetail} isLoading={isLoading} />
        <ModalPokemon
          showModal={showDetailPokemon}
          onCloseModal={closePokemonDetail}
          pokemon={pokemonDetail}
        />
      </main>
    </section>
  );
}

export default App;
