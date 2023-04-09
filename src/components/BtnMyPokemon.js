import React from "react";
import { useNavigate } from "react-router";

function BtnMyPokemon() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border-b border-gray-800"
        type="button"
        onClick={() => navigate('/mypokedex')} >MyPokémon</button>
    </div>
  )
}

export default BtnMyPokemon;
