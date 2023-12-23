//import AddSave from "../Save/AddSave.jsx";
import React, { useEffect, useState } from "react";
import { observer, inject } from 'mobx-react';
import Delete from "./../../assets/icons/trash.svg";
import Edit from "./../../assets/icons/pencil.svg";
import Save from "./../../assets/icons/save.svg";
import Cansel from "./../../assets/icons/cansel.svg";
import "./tablerow.scss";

function Tablerow({ wordStore, word })
{
  const [pressed, setPressed] = useState(false);
  const [state, setState] = useState(word);
  const [errors, setErrors] = useState({});

  const checkValidation = () => {
    const newErrors = Object.keys(state).reduce((account, item) => {
      // eslint-disable-next-line default-case
      switch (item) {
        case "english":
        case "transcription":
        case "russian":
        case "tags":
          account = {
            ...account,
            [item]: state[item].trim().length > 0 ? undefined : "Пустое поле",
          };
          break;
      }
      return account;
    }, {});

    setErrors(newErrors);
  };

  const handleChangeSave = (event) => {
    event.preventDefault();
    checkValidation();
    if (state.english !== "" && state.transcription !== "" && state.russian !== "" && state.tags !== "") {
      setPressed(!pressed);
    }
    wordStore.wordEdit(state);
  };

  const handleChangeEdit = (event) => {
    event.preventDefault();
    checkValidation();
    setPressed(!pressed);
  }

  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });

    if (event.target.value.match(/[0-9]/)) {
      alert("Пожалуйста, вводите только буквы");
    }

    checkValidation();
  };


  const handleChangeCansel = () => {
    setState({
      ...wordStore.words,
    });
    setPressed(!pressed);
  };

  const ondelete = () => {
    wordStore.wordDelete(word.id);
  };

  return (
    <tr className="tablerow">
      <td className="rowEnglish">
        {pressed ? (
          <input
          name="english"
          className={errors.english !== undefined ? "inputError":"inputEnglish"}
          data-name={"english"}
          value={state.english}
          onChange={handleChangeInput}
          />
        ) : (
          state.english
        )}
      </td>
      <td className="rowTranscription">
        {pressed ? (
          <input
          name="transcription"
          className={ errors.transcription !== undefined ? "inputError":"inputTranscription"}
          data-name={"transcription"}
          value={state.transcription}
          onChange={handleChangeInput}
          />
        ):(
            state.transcription
        )}
      </td>
      <td className="rowRussian">
        {pressed ? (
          <input
          name="russian"
          className={errors.russian !== undefined ? "inputError":"inputRussian"}
          data-name={"russian"}
          value={state.russian}
          onChange={handleChangeInput}
          />
        ) : (
          state.russian
      )}
      </td>
      <td className="rowTags">
        {pressed ? (
          <input
          name="tags"
          className={errors.tags !== undefined? "inputError":"inputTags"}
          data-name={"tags"}
          value={state.tags}
          onChange={handleChangeInput}
          />
        ) : (
          state.tags
        )}
      </td>
      <td className="editBlock">
        <div>
        {pressed ? (
          <button
            className="rowSave"
            onClick={handleChangeSave}>
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
            onClick={handleChangeSave}>
            <img className="cansel"
            src={Cansel}
            alt="cansel"
            />
          </button>
        ) : (
          <button
            className="rowDelete">
            <img className="delete"
            onClick={ondelete}
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
export default inject(['wordStore'])(observer(Tablerow));