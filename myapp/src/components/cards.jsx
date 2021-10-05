import React from 'react';
import CardItem from './cardItems';
import './cards.css';

const Cards = () => {
    const src1 = '../images/astro.jpg'
    const src2 = '../images/red-centered-disk.jpg'
    return ( 
        <div className="cards">
            <h1>check out this epic destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={src1} text="Explore the Hidden waterfall inside the Amazon jungle" label='Adventure' path="/services" />
                        <CardItem src={src2} text="Travel through the Islands of Bali in a Private Cruise" label='Luxury' path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={src1} text="Explore the Hidden waterfall inside the Amazon jungle" label='Adventure' path="/services" />
                        <CardItem src={src2} text="Travel through the Islands of Bali in a Private Cruise" label='Luxury' path="/services" />
                        <CardItem src={src2} text="Travel through the Islands of Bali in a Private Cruise" label='Luxury' path="/services" />
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;