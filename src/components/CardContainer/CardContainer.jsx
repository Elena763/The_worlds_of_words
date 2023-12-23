import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import Card from "../Card/Card.jsx";
import ButtonLeft from "../buttonleft/ButtonLeft.jsx";
import ButtonRight from "../buttonright/ButtonRight.jsx";
import  "./cardContainer.scss";

function CardContainer({ wordStore }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const [wordNumber, setwordNumber] = useState(0);
    const [wordLearned, setwordLearned] = useState([]);

    const nextSlide = () => {
        if (slideIndex !== wordStore.words.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === wordStore.words.length) {
            alert("Вы достигли конца списка карточек!");
            setSlideIndex(1);
            setwordNumber(0);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(wordStore.words.length);
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

    const elements = wordStore.words.map((word) => {
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
                <div className="gameWord">выученных слов {wordNumber}/{wordStore.words.length}</div>
            </div>
            <div onClick={nextSlide} className='cardContainerButton'>
                <ButtonRight />
            </div>
        </div>
    );
}

export default  inject(['wordStore'])(observer(CardContainer));