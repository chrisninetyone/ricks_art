import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-ul">
                <li><a href="#" className="navbar-link">About</a></li>
                <li><a href="#" className="navbar-link">Gallery</a></li>
                <li><a href="#" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;