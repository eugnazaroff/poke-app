import React from 'react';
import './pokemonPage.scss'

import {useSelector} from "react-redux";

const PokemonPage = ({match}) => {

    const pokemonData = useSelector(store => store.pokemon.pokemons)
    const pokemon = pokemonData.find(item => item.name === match.params.name)
    const loading = useSelector(store => store.pokemon.loading)

    return (
        !loading &&
        (<div className='page'>
            <div className="page__main-container">
                <h2 className='page__title'>{pokemon.name}</h2>
                <img className='page__portrait' src={pokemon.sprites.other['official-artwork'].front_default}
                     alt="portrait"/>
            </div>

            <div className="page__secondary-container">
                <p className="page__small-title">Height: {pokemon.height}</p>
                <p className="page__small-title">Weight: {pokemon.weight}</p>
                <p className="page__small-title">Abilities:</p>
                <ul className="page__list page__small-title">
                    {pokemon.abilities.map(ability => <li key={pokemon.name+Math.random()} className='page__list-item'>{ability.ability.name}</li>)}
                </ul>
                <p className="page__small-title">Base experience: {pokemon.base_experience}</p>
                <p className="page__small-title">Specie:</p>
                <p className="page__small-title">
                    {pokemon.species.name}</p>
            </div>
        </div>)
    );
};

export default PokemonPage;