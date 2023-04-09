import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { listPokemon } from '../features/list/listSlice';
import Header from '../components/Header';

function List() {
  const dispatch = useDispatch();
  const list = useSelector((state => state.list));

  useEffect(() => {
    dispatch(listPokemon());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  try {
    if (!list.pokemonList) {
      return (
        <div>

          <Header />

          <div>
            Loading...
          </div>

        </div>
      );
    } else {
      return (
        <div>

          <div className='sticky top-0'>
            <Header />
          </div>

          <div className='flex justify-center'>
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>NAME</td>
                </tr>
              </thead>
              <tbody>
                {list.pokemonList.results.map(pokeItem => (
                  <tr key={pokeItem.name}>
                    <td>{pokeItem.url.split('/')[6]} </td>
                    <td>{pokeItem.name} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      );
    }
  } catch (error) {
    return (
      <div>

        <Header />

        <div>
          List Not Found
        </div>

      </div>
    );
  }
}

export default List;
