import React from 'react';
import {Switch} from "react-router";
import Header from "./components/header/header";
import './App.css'
import PokemonCardList from "./components/pokemonCardList/pokemonCardList";
import {useSelector} from "react-redux";

const App = () => {


    return (
        <div className='app'>
            <Header pokemons={pokemons}/>
            <PokemonCardList/>

        </div>
    );
};

export default App;