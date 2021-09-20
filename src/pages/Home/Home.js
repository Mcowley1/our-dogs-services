import React from 'react';
import kayenne from '../assets/IMG_5599.JPG';
import frankie from '../assets/Image from iOS.jpg';
import './Home.css';

function Home(props) {
    return (
        <div className="pup1">
            <h1>Home</h1>
            <h2>Welcome to the land of Kayenne and Frankie</h2>
            <div>
                <h2>Kayenne</h2>
                <img src={kayenne} alt="Kayenne" />
            </div>
            <div className="pup2">
                <h2>Frankie</h2>
                <img className="f1" src={frankie} alt="frankie" />
            </div>
        </div>
    );
}

export default Home;