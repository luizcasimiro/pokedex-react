import React from "react";
import Header from "../components/Header";
import BtnPokemonList from "../components/BtnPokemonList";
import BtnSearchPokemon from "../components/BtnSearchPokemon";
import BtnMyPokemon from "../components/BtnMyPokemon";


function Home() {
  return (
    <div>

      <Header />

      <h1 className="flex justify-center p-6 font-bold">
        Welcome to your Pokédex!
      </h1>

      <p className=" flex justify-center mt-4 mb-2 mx-8">
        List of existent pokémon:
      </p>

      <div className="flex justify-center mb-10">
        <BtnPokemonList />
      </div>

      <p className=" flex justify-center mt-4 mb-2 mx-8">
        Search for a new pokémon:
      </p>

      <div className="flex justify-center mb-10">
        <BtnSearchPokemon />
      </div>

      <p className=" flex justify-center mt-4 mb-2 mx-8">
        See all the pokémon you have:
      </p>
      <div className="flex justify-center mb-10">
        <BtnMyPokemon />
      </div>

    </div>
  );
}

export default Home;
