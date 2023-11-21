import React, { useState, useRef, useEffect } from "react";
import "./card.scss";

function Card(props)
  {
    const [pressed, setPressed] = useState(false);
    const ref = useRef(null);

    useEffect(()=> {
      if (ref.current) {
        ref.current.focus();
        console.log(ref.current);
      }
    });

    const handlePressedTranslation = (e) => {
      e.preventDefault();
      setPressed(!pressed);
      props.wordAdd(props.id);
    };

  return (
    <div className="card">
      <div className="card__english">{props.english}</div>
      <div className="card__transcription">{props.transcription}</div>
      <div className="card__container">
      {pressed ? (
        <div className="card__translation">
          {props.russian}
        </div>
      ) : (
        <button ref={ref} className="card__button" onClick={handlePressedTranslation}>
          Перевод
        </button>
      )}
      </div>
    </div>
  );
}
export default Card;