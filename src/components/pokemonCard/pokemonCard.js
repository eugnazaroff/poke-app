import React from 'react';
import './pokemonCard.scss'
import {Link} from "react-router-dom";


const PokemonCard = ({pokemon}) => {
    return (
        <Link className='card' to={`/${pokemon.name}`}>
            <p>{pokemon.name}</p>
            <img className="card__portrait" src={pokemon.sprites.other['official-artwork'].front_default} alt="portrait"/>
        </Link>
    )

};

export default PokemonCard;