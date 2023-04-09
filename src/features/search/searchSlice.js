import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchPokemon = createAsyncThunk(
  'search/searchPokemon',
  async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    return data;
  }
)

const searchSlice = createSlice({
  name: 'search',

  initialState: {
    pokeData: false,
  },

  extraReducers: (builder) => {
    builder.addCase(searchPokemon.pending, (state) => {
      state.pokeData = 'pending'
    });
    builder.addCase(searchPokemon.fulfilled, (state, action) => {
      state.pokeData = action.payload
    });
    builder.addCase(searchPokemon.rejected, (state) => {
      state.pokeData = 'rejected'
    });
  }

});

export default searchSlice.reducer;
