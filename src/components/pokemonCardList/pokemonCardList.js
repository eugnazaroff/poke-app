import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchItems} from "../../redux/pokemon/pokemonActions";
import PokemonCard from "../pokemonCard/pokemonCard";
import './pokemonCardList.scss'

const PokemonCardList = () => {

    const loading = useSelector((store) => store.pokemon.loading)
    const pokemons = useSelector((store) => store.pokemon.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems())

    }, [])
    return (

        <div className="card-list">
            {
                loading ? <p>Loading</p> :
                    pokemons.map(pokemon => (
                        <PokemonCard
                            key = {pokemon.name+Math.random()}
                            pokemon={pokemon}/>
                    ))
            }

        </div>
    );
};

export default PokemonCardList;