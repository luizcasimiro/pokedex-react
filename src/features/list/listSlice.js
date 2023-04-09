import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const listPokemon = createAsyncThunk(
  'list/listPokemon',
  async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`);
    const data = await response.json();

    return data;
  }
)

const listSlice = createSlice({
  name: 'list',

  initialState: {
    pokemonList: false,
  },

  extraReducers: (builder) => {
    builder.addCase(listPokemon.pending, (state) => {
      state.pokemonList = false
    });
    builder.addCase(listPokemon.fulfilled, (state, action) => {
      state.pokemonList = action.payload
    });
    builder.addCase(listPokemon.rejected, (state) => {
      state.pokemonList = 'rejected'
    });
  }

});

export default listSlice.reducer;
