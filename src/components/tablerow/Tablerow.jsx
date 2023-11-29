//import AddSave from "../Save/AddSave.jsx";
import React, { useEffect, useState } from "react";
import Delete from "./../../assets/icons/trash.svg";
import Edit from "./../../assets/icons/pencil.svg";
import Save from "./../../assets/icons/save.svg";
import Cansel from "./../../assets/icons/cansel.svg";
import "./tablerow.scss";

function Tablerow(props)
{
  const [pressed, setPressed] = useState(false);
  const [state, setState] = useState(props);
  const [english, setEnglish] = useState('');
  const [transcription, setTranscription] = useState('');
  const [russian, setRussian] = useState('');
  const [tags, setTags] = useState('');
  const [englishDirty, setEnglishDirty] = useState(false);
  const [transcriptionDirty, setTranscriptionDirty] = useState(false);
  const [russianDirty, setRussianDirty] = useState(false);
  const [tagsDirty, setTagsDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [errorEnglish, setErrorEnglish] = useState(false);
  const [errorTranscription, setErrorTranscription] = useState(false);
  const [errorRussian, setErrorRussian] = useState(false);
  const [errorTags, setErrorTags] = useState(false);
//Помечаем форму не валидной, чтобы заблокровать кнопку Сохранить
  useEffect(() => {
    if (errorEnglish || errorRussian || errorTranscription || errorTags) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [errorEnglish, errorRussian, errorTranscription, errorTags])
//Ошибки инпутов
  const englishHandler = (e) =>{
    setEnglish(e.target.value)
    const re = /^[a-zA-Z\s]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setErrorEnglish('Поле должно содержать только английские буквы')
    } else {
      setErrorEnglish()
    }
  }

  const russianHandler = (e) =>{
    setRussian(e.target.value)
    const re = /^[а-яА-ЯёЁ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setErrorRussian('Поле должно содержать только русские буквы')
    } else {
      setErrorRussian()
    }
  }

  const transcriptionHandler = (e) =>{
    setTranscription(e.target.value)
    const re = /^[\D]*$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setErrorTranscription("Поле должно содержать только английские буквы и символы [, ], :, '")
    } else {
      setErrorTranscription()
    }
  }

  const tagsHandler = (e) =>{
    setTags(e.target.value)
    const re = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setErrorTags('Поле должно содержать только буквы')
    } else {
      setErrorTags()
    }
  }
//Вывод ошибки
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'english':
        setEnglishDirty(true)
        break
      case 'transcription':
        setRussianDirty(true)
        break
      case 'russian':
        setTranscriptionDirty(true)
        break
      case 'tags':
        setTagsDirty(true)
        break
    }
  }

  const handlePressedSave = () => {
    if (english === "" ) {
      setErrorEnglish(true);
    }
    if (transcription === "") {
      setErrorTranscription(true);
    }
    if (russian === "") {
      setErrorRussian(true);
    }
    if (tags === "") {
      setErrorTags(true);
    }
    if (english !== "" && transcription !== "" && russian!== "" && tags !== "") {
      setPressed(!pressed);
      console.log(english, transcription, russian, tags);
    }
  };

  const handleChangeCansel = () => {
    setState({
      ...props,
    });
    setPressed(!pressed);
    setErrorEnglish(false);
    setErrorTranscription(false);
    setErrorRussian(false);
    setErrorTags(false);
  };

  return (
    <tr className="tablerow">

      <td className="rowEnglish">
      {(englishDirty && errorEnglish) && <div className="errorMessage">{errorEnglish}</div>}
        {pressed ? (
          <input
          name="english"
          className={errorEnglish ? "inputError":"inputEnglish"}
          data-name={"english"}
          value={english}
          onBlur={e => blurHandler(e)}
          onChange={e => englishHandler(e)}
          />
        ) : (
          state.english
        )}
      </td>
      <td className="rowTranscription">
      {(transcriptionDirty && errorTranscription) && <div className="errorMessage">{errorTranscription}</div>}
        {pressed ? (
          <input
          name="transcription"
          className={errorTranscription ? "inputError":"inputTranscription"}
          data-name={"transcription"}
          value={transcription}
          onBlur={e => blurHandler(e)}
          onChange={e => transcriptionHandler(e)}
          />
        ):(
            state.transcription
        )}
      </td>
      <td className="rowRussian">
      {(russianDirty && errorRussian) && <div className="errorMessage">{errorRussian}</div>}
        {pressed ? (
          <input
          name="russian"
          className={errorRussian ? "inputError":"inputRussian"}
          data-name={"russian"}
          value={russian}
          onBlur={e => blurHandler(e)}
          onChange={e => russianHandler(e)}
          />
        ) : (
          state.russian
      )}
      </td>
      <td className="rowTags">
      {(tagsDirty && errorTags) && <div className="errorMessage">{errorTags}</div>}
        {pressed ? (
          <input
          name="tags"
          className={errorTags ? "inputError":"inputTags"}
          data-name={"tags"}
          value={tags}
          onBlur={e => blurHandler(e)}
          onChange={e => tagsHandler(e)}
          />
        ) : (
          state.tags
        )}
      </td>
      <td className="editBlock">
        <div>
        {pressed ? (
          <button
            disabled={!formValid}
            className="rowSave"
            onClick={handlePressedSave}>
            <img className="save"
            src={Save}
            alt="save"
            type="submit"
            />
          </button>
        ) : (
          <button
            className="rowEdit"
            onClick={handleChangeCansel}>
            <img className="edit"
            src={Edit}
            alt="edit"
            />
          </button>
        )}
        </div>
      </td>
      <td className="deleteBlock">
          <div>
          {pressed ? (
          <button
            className="rowCansel"
            onClick={handlePressedSave}>
            <img className="cansel"
            src={Cansel}
            alt="cansel"
            />
          </button>
        ) : (
          <button
            className="rowDelete">
            <img className="delete"
            src={Delete}
            alt="delete"
            />
          </button>
        )}
          </div>
      </td>
  </tr>
  );
}
export default Tablerow;