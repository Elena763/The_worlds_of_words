//import AddSave from "../Save/AddSave.jsx";
import React, { useState } from "react";
import Delete from "./../../assets/icons/trash.svg";
import Edit from "./../../assets/icons/pencil.svg";
import Save from "./../../assets/icons/save.svg";
import Cansel from "./../../assets/icons/cansel.svg";
import "./tablerow.scss";

function Tablerow(props)
{
  const [pressed, setPressed] = useState(false);
  const [state, setState] = useState(props);
  const [errorEnglish, setErrorEnglish] = useState(false);
  const [errorTranscription, setErrorTranscription] = useState(false);
  const [errorRussian, setErrorRussian] = useState(false);
  const [errorTags, setErrorTags] = useState(false);

  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });
    if (state.english !== "") {
      setErrorEnglish(false);
    }
    if (state.transcription !== "") {
      setErrorTranscription(false);
    }
    if (state.russian !== "") {
      setErrorRussian(false);
    }
    if (state.tags !== "") {
      setErrorTags(false);
    }
  };
  const handlePressedSave = () => {
    if (state.english === "") {
      setErrorEnglish(true);
    }
    if (state.transcription === "") {
      setErrorTranscription(true);
    }
    if (state.russian === "") {
      setErrorRussian(true);
    }
    if (state.tags === "") {
      setErrorTags(true);
    }
    if (state.english !== "" && state.transcription !== "" && state.russian!== "" && state.tags !== "") {
      setPressed(!pressed);
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
        {pressed ? (
          <input
          name="english"
          className={errorEnglish ? "inputError":"inputEnglish"}
          data-name={"english"}
          value={state.english}
          onChange={handleChangeInput} />
        ) : (
          state.english
        )}
      </td>
      <td className="rowTranscription">
        {pressed ? (
          <input
          name="transcription"
          className={errorTranscription ? "inputError":"inputTranscription"}
          data-name={"transcription"}
          value={state.transcription}
          onChange={handleChangeInput} />
        ):(
            state.transcription
        )}
      </td>
      <td className="rowRussian">
        {pressed ? (
          <input
          name="russian"
          className={errorRussian ? "inputError":"inputRussian"}
          data-name={"russian"}
          value={state.russian}
          onChange={handleChangeInput} />
        ) : (
          state.russian
      )}
      </td>
      <td className="rowTags">
        {pressed ? (
          <input
          name="tags"
          className={errorTags ? "inputError":"inputTags"}
          data-name={"tags"}
          value={state.tags}
          onChange={handleChangeInput}/>
        ) : (
          state.tags
        )}
      </td>
      <td className="editBlock">
        <div>
        {pressed ? (
          <button
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