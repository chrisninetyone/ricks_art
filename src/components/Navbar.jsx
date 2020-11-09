import React from 'react';
import paintbrush from '../assets/paintbrush.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo" href="">
                <img src={paintbrush} alt=""/>
            </a>
            <ul className="navbar-ul">
                <li><a href="#" className="navbar-link">About</a></li>
                <li><a href="#" className="navbar-link">Gallery</a></li>
                <li><a href="#" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;