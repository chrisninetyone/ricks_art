import React from 'react';
import './Home.css'

import abstract20 from '../assets/abstract20.webp';
import abstract4 from '../assets/abstract4.webp';
import lightning from '../assets/lightning.webp';
import abstract3 from '../assets/abstract3.webp';


const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <p className="title">
                    Rick Gentile Fine Art
                </p>
            </div>
            <div className="home-right">
                <div className="pic-row">
                    <img src={abstract20} alt=""/>
                    <img src={abstract4} alt=""/>
                </div>
                <div className="pic-row">
                    <img src={lightning} alt=""/>
                    <img src={abstract3} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Home;