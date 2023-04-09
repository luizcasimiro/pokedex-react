import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/list/listSlice";
import searchReducer from '../features/search/searchSlice'

const store = configureStore({
  reducer: {
    list: listReducer,
    search: searchReducer
  }
});

export default store;
