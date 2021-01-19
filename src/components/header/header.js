import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";

const Header = ({pokemons}) => {
    return (
        <div className='header'>
            <h1 className="header__logo">Poke-app</h1>
            <div className="header__menu">
                <p className="header__menu-button">Pokemon List</p>
                <div className="menu__container">
                    {pokemons.map(pokemon => (
                        <div className="menu__item">
                            <Link to='/'>{pokemon.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;