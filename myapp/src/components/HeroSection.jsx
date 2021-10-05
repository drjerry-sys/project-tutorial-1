import React from 'react';
import './HeroSection.css';
import '../App.css';
import Button from './button';

const HeroSection = () => {
    return ( 
        <div className="hero-container">
            {/* <video src='/videos/' autoPlay loop muted /> */}
            <h1>Adventures Awaits you</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <i className="fa fa-play-circle" />
                </Button>
            </div>
        </div>
     );
}
 
export default HeroSection;