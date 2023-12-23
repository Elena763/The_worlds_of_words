import React, { useState } from 'react';
import Card from "../Card/Card.jsx";
import ButtonLeft from "../buttonleft/ButtonLeft.jsx";
import ButtonRight from "../buttonright/ButtonRight.jsx";
import  "./cardContainer.scss";
import {words} from "../words.js"


 export default function CardContainer() {
    const [slideIndex, setSlideIndex] = useState(1);
    const [wordNumber, setwordNumber] = useState(0);
    //const [wordLearned, setwordLearned] = useState([]);

    const nextSlide = () => {
        if (slideIndex !== words.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === words.length) {
            alert("Вы достигли конца списка карточек!");
            setSlideIndex(1);
            setwordNumber(0);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(words.length);
        }
    };

    const wordAdd = (id) => {
            setwordNumber(wordNumber + 1);
    };

    const elements = words.map((word) => {
            const { id, ...wordProps } = word;
            return <Card
                key={id}
                id={id}
                wordAdd={wordAdd}
                {...wordProps}
            />;
        });

    return (
        <div className='cardContainer'>
            <div onClick={prevSlide} className='cardContainerButton'>
                <ButtonLeft />
            </div>
            <div>{elements[slideIndex - 1]}
                <div className="gameWord">выученных слов {wordNumber}/{words.length}</div>
            </div>
            <div onClick={nextSlide} className='cardContainerButton'>
                <ButtonRight />
            </div>
        </div>
    );
}
