import React from 'react'
import { useSelector } from 'react-redux';


function CardSearch({ id, name, sprite }) {
  const pokeData = useSelector((state => state.search.pokeData));
  const pokeTypes = pokeData.types.map(type => [type.type.name, type.type.url]);
  const pokeAbilities = pokeData.abilities.map(ability => [ability.ability.name, ability.ability.url]);
  const pokeDetails = {
    id: pokeData.id,
    name: pokeData.name,
    sprite: pokeData.sprites.front_default,
    weight: pokeData.weight,
    height: pokeData.height,
    types: pokeTypes,
    abilities: pokeAbilities,
    speed: pokeData.stats[5].base_stat,
    defense: pokeData.stats[2].base_stat,
    attack: pokeData.stats[1].base_stat,
    hp: pokeData.stats[0].base_stat
  };

  const handleCatch = () => {
    let myPokemon = JSON.parse(localStorage.getItem('myPokemon'));

    if (!myPokemon) {
      myPokemon = [pokeDetails];
    } else {
      const filter = myPokemon.filter(poke => poke.id === pokeDetails.id);
      if (filter.length === 0) {
        myPokemon.push(pokeDetails);
      }
    }

    localStorage.setItem('myPokemon', JSON.stringify(myPokemon));
  }

  return (
    <div className='border rounded-md border-blue-800 py-4 px-14 mt-4'>

      <div>
        <img src={sprite} alt='sprite' ></img>
      </div>

      <div className='flex justify-center'>
        {id}
      </div>

      <div className='flex justify-center'>
        {name}
      </div>

      <div className='flex justify-center mt-8'>
        <button
          className='rounded-md py-2 px-6 uppercase text-white bg-orange-500 font-bold text-sm'
          type='button'
          onClick={() => handleCatch()}
        >
          Catch
        </button>
      </div>

    </div>

  )
}

export default CardSearch;
