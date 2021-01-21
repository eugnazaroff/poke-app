import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useEffect} from "react";

const Header = () => {


    const pokemons = useSelector(store => store.pokemon.pokemons)

    const [menuState, setMenuState] = useState('closed')
    const scroll = window.pageYOffset
    useEffect(()=>{
        console.log(scroll)
        scroll > 0 && setMenuState('closed')

    }, [scroll])

    return (
        <div className='header'>
            <h1 className="header__logo"><Link to='/'>Poke-app</Link></h1>
            <div className="header__menu">
                <p onClick={() => setMenuState(prevState => prevState === 'closed' ? 'opened' : 'closed')}
                   className="header__menu-button">Pokemon List</p>
                <div
                    onClick={() => setMenuState('closed')}
                    className={`menu__container 
                         ${menuState === 'open' && 'menu__container-opened'}
                         ${menuState === 'closed' && 'menu__container-closed'}`}>
                    {pokemons.map(pokemon => (
                        <div key={pokemon.name+Math.random()} className="menu__item">
                            <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;