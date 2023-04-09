import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { searchPokemon } from '../features/search/searchSlice';
import Header from '../components/Header';
import CardSearch from '../components/CardSearch';

function Search() {
  const dispatch = useDispatch();
  const pokeData = useSelector((state => state.search.pokeData));
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    if (value) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  };

  try {
    if (!pokeData) {
      return (
        <div>
          <Header />

          <div className='flex justify-center m-6'>
            <input
              className='border border-blue-800 text-center p-2 rounded-md mt-8'
              type='text'
              placeholder='Pokémon name or id'
              value={value}
              onChange={(event) => handleChange(event)}
            >
            </input>
          </div>

          <div className='flex justify-center'>
            <button
              className='border border-blue-800 bg-blue-700 uppercase text-white rounded-md py-2 px-4 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300 font-bold text-sm'
              type='button'
              disabled={searchDisabled}
              onClick={() => dispatch(searchPokemon(value.toLowerCase()))}
            >
              Search
            </button>
          </div>
        </div>
      );
    } else if (pokeData === 'pending') {
      return (
        <div>
          <Header />

          <div className='flex justify-center m-6'>
            <input
              className='border border-blue-800 text-center p-2 rounded-md mt-8'
              type='text'
              placeholder='Pokémon name or id'
              value={value}
              onChange={(event) => handleChange(event)}
            >
            </input>
          </div>

          <div className='flex justify-center'>
            <button
              className='border border-blue-800 bg-blue-700 uppercase text-white rounded-md py-2 px-4 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300 font-bold text-sm'
              type='button'
              disabled={searchDisabled}
              onClick={() => dispatch(searchPokemon(value.toLowerCase()))}
            >
              Search
            </button>
          </div>

          <div>Loading...</div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />

          <div className='flex justify-center m-6'>
            <input
              className='border border-blue-800 text-center p-2 rounded-md mt-8'
              type='text'
              placeholder='Pokémon name or id'
              value={value}
              onChange={(event) => handleChange(event)}
            >
            </input>
          </div>

          <div className='flex justify-center'>
            <button
              className='border border-blue-800 bg-blue-700 uppercase text-white rounded-md py-2 px-4 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300 font-bold text-sm'
              type='button'
              disabled={searchDisabled}
              onClick={() => dispatch(searchPokemon(value.toLowerCase()))}
            >
              Search
            </button>
          </div>

          <div className='flex justify-center mt-10'>
            <CardSearch id={pokeData.id} name={pokeData.name} sprite={pokeData.sprites.front_default} />
          </div>
        </div>
      );
    }
  } catch (error) {
    return (
      <div>
        <Header />

        <div className='flex justify-center m-6'>
          <input
            className='border border-blue-800 text-center p-2 rounded-md mt-8'
            type='text'
            placeholder='Pokémon name or id'
            value={value}
            onChange={(event) => handleChange(event)}
          >
          </input>
        </div>

        <div className='flex justify-center'>
          <button
            className='border border-blue-800 bg-blue-700 uppercase text-white rounded-md py-2 px-4 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-300 font-bold text-sm'
            type='button'
            disabled={searchDisabled}
            onClick={() => dispatch(searchPokemon(value.toLowerCase()))}
          >
            Search
          </button>
        </div>

        <div>
          Pokémon Not Found
        </div>
      </div>
    );
  }
}

export default Search;
