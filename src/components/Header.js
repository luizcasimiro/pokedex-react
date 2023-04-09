import React from "react";
import { useNavigate } from "react-router";
import BtnPokemonList from "./BtnPokemonList";
import BtnSearchPokemon from "./BtnSearchPokemon";
import BtnMyPokemon from "./BtnMyPokemon";

function Header() {
  const email = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  return (
    <div>

      <div className="flex justify-evenly items-center p-3 bg-blue-800 text-white font-bold text-sm">

        <div>
          {email ? `${email}` : `Welcome!`}
        </div>

        <button
          className="border-b border-white"
          type="button"
          onClick={() => navigate('/')} >
          Logout
        </button>

      </div>

      <nav className="flex justify-evenly p-3 bg-blue-100">

        <button
          className="border-b border-gray-800"
          type="button"
          onClick={() => navigate('/home')} >Home</button>

        <BtnPokemonList />
        <BtnSearchPokemon />
        <BtnMyPokemon />

      </nav>

    </div >
  );
};

export default Header;
