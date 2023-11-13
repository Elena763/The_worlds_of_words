import React, { useState } from 'react';
import Card from "../card/Card.jsx";
import ButtonLeft from "../buttonleft/ButtonLeft.jsx";
import ButtonRight from "../buttonright/ButtonRight.jsx";
import  "./cardContainer.scss";
import {words} from "../words.js"


 export default function CardContainer() {
    const [slideIndex, setSlideIndex] = useState(1);
    const [wordNumber, setwordNumber] = useState(0);
    const [wordLearned, setwordLearned] = useState([]);

    const nextSlide = () => {
        if (slideIndex !== words.length) {
        setSlideIndex(slideIndex + 1);
        console.log(setSlideIndex);
        } else if (slideIndex === words.length) {
        setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
        setSlideIndex(words.length);
        }
    };

    const wordAdd = (id) => {
        const array = [...wordLearned];
        array.push(id);
        let result = [];
        for (let str of array) {
        if (!result.includes(str)) {
            result.push(str);
        }
        }
        setwordLearned(result);
        setwordNumber(result.length);
    };

    const elements = words.map((word) => {
        const { id, ...wordProps } = word;
        return <Card key={id} id={id} wordAdd={wordAdd} {...wordProps} />;
    });

    return (
        <div className='cardContainer'>
            <div onClick={prevSlide} className='cardContainerButton'>
                <ButtonLeft />
            </div>
            <div>{elements[slideIndex - 1]}
                <div className="game-word">выученных слов {wordNumber}/{words.length}</div>
            </div>
            <div onClick={nextSlide} className='cardContainerButton'>
                <ButtonRight />
            </div>
        </div>
    );
}
