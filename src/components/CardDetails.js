import React from 'react'

function CardDetails({ abilities, attack, defense, height, hp, id, name, speed, sprite, types, weight }) {

  return (
    <div className='border rounded-md border-blue-800 p-5 m-5 w-96'>

      <div className='flex justify-center'>
        <img src={sprite} alt='sprite' ></img>
      </div>

      <div className='flex justify-center'>
        {id}
      </div>

      <div className='flex justify-center mb-4'>
        {name}
      </div>

      <div>
        Types: {types.map(type =>
          <button
            className='border-b border-blue-800 mx-2 text-blue-800'
            key={type[0]}
            type='button'
          >
            {type[0]}
          </button>)}
      </div>

      <div>
        Abilities: {abilities.map(ability =>
          <button
            className='border-b border-blue-800 mx-2 text-blue-800'
            key={ability[0]}
            type='button'
          >
            {ability[0]}
          </button>)}
      </div>

      <div>
        Weight: {weight} kg
      </div>

      <div>
        Height: {height * 10} cm
      </div>

      <div>
        HP: {hp}
      </div>

      <div>
        Attack {attack}
      </div>

      <div>
        Defense: {defense}
      </div>

      <div>
        Speed: {speed}
      </div>

    </div>

  )
}

export default CardDetails;
