import React from 'react';
import kayenne from '../assets/IMG_5599.JPG';
import frankie from '../assets/Image from iOS.jpg';
import './Home.css';

function Home(props) {
    return (
        <div className="flex-container">
            <div className="flex-item1">
              <h1>Welcome to the land of Kayenne and Frankie</h1>
            </div>
            <div className="flex-item2">
                <h2>Kayenne</h2>
                <img src={kayenne} alt="Kayenne" />
            </div>
            <div className="flex-item3">
                <h2>Frankie</h2>
                <img className="f1" src={frankie} alt="frankie" />
            </div>
        </div>
    );
}

export default Home;