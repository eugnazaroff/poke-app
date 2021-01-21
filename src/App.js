import React from 'react';
import {Switch, Route} from "react-router";
import Header from "./components/header/header";
import './App.css'
import PokemonCardList from "./components/pokemonCardList/pokemonCardList";
import PokemonPage from "./components/pokemonPage/pokemonPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "./redux/pokemon/pokemonActions";
import {useEffect} from "react";


const App = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(store => store.pokemon.pokemons)
    const loading = useSelector(store => store.pokemon.loading)

    useEffect(() => {
        dispatch(fetchItems())
    },[])

    return (
        <div className='app'>
            <Header/>

            <div className="wrapper">
            <Switch>

                <Route exact path='/' render={()=> !loading && <PokemonCardList pokemons={pokemons}/>}/>
                <Route path='/:name/' component={PokemonPage}/>

            </Switch>
            </div>

        </div>
    );
};

export default App;