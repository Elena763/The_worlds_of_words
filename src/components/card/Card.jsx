import "./card.scss";
import React, { useState, useRef, useEffect } from "react";

function Card(props)
  {
    const [pressed, setPressed] = useState(true);
    const btnRef = useRef();

    useEffect(()=>{
      btnRef.current.focus();
    }, []);

    const handlePressedTranslation = () => {
      setPressed(!pressed);
    };

  return (
    <div className="card">
      <div className="card__english">{props.english}</div>
      <div className="card__transcription">{props.transcription}</div>
      <div className="card__container">
      {pressed ? (
        <button className="card__button"  ref={btnRef} onClick={handlePressedTranslation}>
          Перевод
        </button>
      ) : (
        <div className="card__translation">
          {props.russian}
        </div>
      )}
      </div>
    </div>
  );
}
export default Card;