import React, { useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card'

import TheFool from '../cards/The_Fool.png';
import TheMagician from '../cards/The_Magician.png';
import TheHighPriestess from '../cards/The_High_Priestess.png';
import TheEmpress from '../cards/The_Empress.png';
import TheEmperor from '../cards/The_Emperor.png';
import TheHierophant from '../cards/The_Hierophant.png';
import TheLovers from '../cards/The_Lovers.png';
import TheChariot from '../cards/The_Chariot.png';
import Strength from '../cards/Strength.png';
import TheHermit from '../cards/The_Hermit.png';
import WheelOfFortune from '../cards/Wheel_of_Fortune.png';
import Justice from '../cards/Justice.png';
import TheHangedMan from '../cards/The_Hanged_Man.png';
import Death from '../cards/Death.png';
import Temperance from '../cards/Temperance.png';
import TheDevil from '../cards/The_Devil.png';
import TheTower from '../cards/The_Tower.png';
import TheStar from '../cards/The_Star.png';
import TheMoon from '../cards/The_Moon.png';
import TheSun from '../cards/The_Sun.png';
import Judgement from '../cards/Judgement.png';
import TheWorld from '../cards/The_World.png';
import DefaultCard from '../cards/Card_Back.png';


const TarotCard = ({ cardName, reversed }) => {
    const cardImages = {
        'The Fool': TheFool,
        'The Magician': TheMagician,
        'The High Priestess': TheHighPriestess,
        'The Empress': TheEmpress,
        'The Emperor': TheEmperor,
        'The Hierophant': TheHierophant,
        'The Lovers': TheLovers,
        'The Chariot': TheChariot,
        'Strength': Strength,
        'The Hermit': TheHermit,
        'Wheel of Fortune': WheelOfFortune,
        'Justice': Justice,
        'The Hanged Man': TheHangedMan,
        'Death': Death,
        'Temperance': Temperance,
        'The Devil': TheDevil,
        'The Tower': TheTower,
        'The Star': TheStar,
        'The Moon': TheMoon,
        'The Sun': TheSun,
        'Judgement': Judgement,
        'The World': TheWorld,

    };


    const cardImage = cardImages[cardName] || DefaultCard;

    const cardStyle = {
        cursor: 'pointer'
    };


    const CardFront = () => {
        return (
            <div className="w-56 h-auto">
                <img
                    src={cardImage}
                    alt={cardName}
                    className={`rounded-xl ${reversed ? 'transform rotate-180' : ''}`}
                />
                <div className="text-center mt-2">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" />
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{cardName}</h2>
                </div>
            </div>
        );
    };

    const CardBack = () => {
        return (
            <div className="w-56 h-auto">
                <img
                    src={DefaultCard}
                    className={"w-96 h-auto rounded-xl"}
                />
                <div className="text-center mt-2">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" />
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Tap to reveal</h2>
                </div>
            </div>
        );
    };


    return (
        <div className="flex w-96">
            <ReactFlipCard
                flipTrigger={'onClick'}
                containerStyle={cardStyle}
                backComponent={
                    <CardFront />
                }
                frontComponent={
                    <CardBack />
                }
            />
        </div>
    );
};


export default TarotCard;
