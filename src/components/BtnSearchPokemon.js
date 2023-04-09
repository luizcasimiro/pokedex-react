import React from "react";
import { useNavigate } from "react-router";

function BtnSearchPokemon() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border-b border-gray-800"
        type="button"
        onClick={() => navigate('/search')} >Search</button>
    </div>
  )
}
export default BtnSearchPokemon;
