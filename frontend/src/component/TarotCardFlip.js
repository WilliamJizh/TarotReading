import React, { useState, useEffect } from 'react';
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

const tarotCards = [
    TheFool, TheMagician, TheHighPriestess, TheEmpress, TheEmperor,
    TheHierophant, TheLovers, TheChariot, Strength, TheHermit,
    WheelOfFortune, Justice, TheHangedMan, Death, Temperance,
    TheDevil, TheTower, TheStar, TheMoon, TheSun, Judgement, TheWorld
];

function TarotCardFlip() {
    const [cardImage, setCardImage] = useState(getRandomCard());
    const [isFlipped, setIsFlipped] = useState(false);

    const [previousCard, setPreviousCard] = useState(null);

    useEffect(() => {
        tarotCards.forEach((card) => {
            const img = new Image();
            img.src = card;
        });
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped(prevIsFlipped => !prevIsFlipped);
            if (!isFlipped) {
                const newCard = getRandomCard(previousCard);
                setCardImage(newCard);
                setPreviousCard(newCard);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [previousCard, isFlipped]);


    function getRandomCard(previousCard) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * tarotCards.length);
        } while (tarotCards[randomIndex] === previousCard);
        return tarotCards[randomIndex];
    }


    const CardFront = () => {
        return (
            <div className="w-56 h-auto rounded-2xl mx-auto">
                <img
                    src={cardImage}
                    className="rounded-lg card-image-transition"
                />
            </div>
        );
    };

    const CardBack = () => {
        return (
            <div className="w-56 h-auto rounded-2xl mx-auto">
                <img
                    src={DefaultCard}
                    className="rounded-lg card-image-transition"
                />
            </div>
        );
    };

    const styles = {
        width: '14rem', height:'auto',
    }

    return (
        <div className="w-full h-full justify-center items-center">
            <ReactFlipCard
                containerStyle={styles}
                flipTrigger={'disabled'}
                flipByProp={isFlipped}
                backComponent={
                    <CardFront />
                }
                frontComponent={
                    <CardBack />
                }
            />
        </div>
        
    );
}

export default TarotCardFlip;
