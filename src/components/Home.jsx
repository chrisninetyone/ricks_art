import React from 'react';
import './Home.css'
import abstract3 from '../assets/abstract3.webp';
import abstract8 from '../assets/abstract8.webp';
import abstract12 from '../assets/abstract12.webp';
import lightning from '../assets/lightning.webp';


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
                    <img src={abstract12} alt=""/>
                    <img src={abstract8} alt=""/>
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