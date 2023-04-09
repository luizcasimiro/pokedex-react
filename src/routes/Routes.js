import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import List from '../pages/List';
import Search from '../pages/Search';
import MyPokemon from '../pages/MyPokemon';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/list" element={<List />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/mypokedex" element={<MyPokemon />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
