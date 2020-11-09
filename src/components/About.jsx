import React from 'react';
import './About.css'

import portrait from '../assets/rickgentilebu.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <h3>About Rick</h3>
                <img src={portrait} alt=""/>
            </div>
            <div className="about-right">
                <p className="about-text">
                    Some text here about Rick’s life as an artist, creator, veteran, dad, etc.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default About;