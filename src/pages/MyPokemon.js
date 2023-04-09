import React from "react";
import CardDetails from "../components/CardDetails";
import Header from "../components/Header";

function MyPokemon() {
  const myPokemon = JSON.parse(localStorage.getItem('myPokemon'));
  const myPokemonSorted = [...myPokemon].sort((a, b) => a.id - b.id);

  if (!myPokemon) {
    return (
      <div>

        <div className='sticky top-0'>
          <Header />
        </div>

        <p className="flex justify-center mt-20 mb-2 mx-8">
          You don't have any pokémon yet.
        </p>

      </div>
    )
  } else {
    return (
      <div>

        <div className='sticky top-0'>
          <Header />
        </div>

        <div>
          {myPokemonSorted.map(poke =>
            <div key={poke.id} className='flex justify-center' >
              <CardDetails
                abilities={poke.abilities}
                attack={poke.attack}
                defense={poke.defense}
                height={poke.height}
                hp={poke.hp}
                id={poke.id}
                name={poke.name}
                speed={poke.speed}
                sprite={poke.sprite}
                types={poke.types}
                weight={poke.weight}
              />
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default MyPokemon;
