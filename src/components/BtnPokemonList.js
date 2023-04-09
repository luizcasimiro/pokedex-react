import React from "react";
import { useNavigate } from "react-router";

function BtnPokemonList() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border-b border-gray-800"
        type="button"
        onClick={() => navigate('/list')} >List</button>
    </div>
  )
}
export default BtnPokemonList;
