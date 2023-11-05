import "./card.scss";
import { useState } from "react";

function Card()
  {
    const [pressed, setPressed] = useState(true);

    const handlePressedTranslation = () => {
      setPressed(!pressed);
    };

  return (
    <div className="card">
      <div className="card__english">english</div>
      <div className="card__transcription">transcription</div>
      <div className="card__container">
      {pressed ? (
        <button className="card__button" onClick={handlePressedTranslation}>
          Перевод
        </button>
      ) : (
        <div className="card__translation">
          русский
        </div>
      )}
      </div>
    </div>
  );
}
export default Card;