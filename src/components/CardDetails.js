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
          <span className='mx-2' key={type[0]}>{type[0]}</span>
        )}
      </div>

      <div>
        Abilities: {abilities.map(ability =>
          <span className='mx-2' key={ability[0]}>{ability[0]}</span>
        )}
      </div>

      <div>
        Weight: {weight / 10} kg
      </div>

      <div>
        Height: {height / 10} m
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
