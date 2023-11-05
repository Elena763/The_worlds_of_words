//import AddSave from "../Save/AddSave.jsx";
import Delete from "./../../assets/icons/trash.svg";
import Edit from "./../../assets/icons/pencil.svg";
import Save from "./../../assets/icons/save.svg";
import Cansel from "./../../assets/icons/cansel.svg";
import "./tablerow.scss";
import { useState } from "react";

function Tablerow(props)
{
  const [pressed, setPressed] = useState(false);
  const [textEnglish, setEnglish] = useState(props.english);
  const [textTranscription, setTranscription] = useState(props.transcription);
  const [textRussian, setRussian] = useState(props.russian);
  const [textTags, setTags] = useState(props.tags);

  const handlePressedEdit = () => {
    setPressed(!pressed);
  };
  const handlePressedSave = () => {
    setPressed(!pressed);
  };

  const changeEnglish = (event) => {
    setEnglish(event.target.value);
  }
  const changeTranscription = (event) => {
    setTranscription(event.target.value);
  }
  const changeRussian = (event) => {
    setRussian(event.target.value);
  }
  const changeTags = (event) => {
    setTags(event.target.value);
  }

  return (
    <tr className="tablerow">

      <td className="row-english">
        {pressed ? <input name="english" className="input-english"
         value={textEnglish}
         onChange={changeEnglish}/> : props.english}
      </td>
      <td className="row-transcription">
        {pressed ? <input name="transcription" className="input-transcription"
        value={textTranscription}
        onChange={changeTranscription}/> :props.transcription}
      </td>
      <td className="row-russian">
        {pressed ? <input name="russian" className="input-russian" value={textRussian} onChange={changeRussian}/> :props.russian}
      </td>
      <td className="row-tags">
        {pressed ? <input name="tags" className="input-tags" value={textTags} onChange={changeTags}/> :props.tags}
      </td>
      <td className="edit-block">
        <div>
        {pressed ? (
          <button className="row-save" onClick={handlePressedSave}>
            <img className="save"
            src={Save}
            alt="save"
            />
          </button>
        ) : (
          <button className="row-edit" onClick={handlePressedEdit}>
            <img className="edit"
            src={Edit}
            alt="edit"
            />
          </button>
        )}
        </div>
      </td>
      <td className="delete-block">
          <div>
          {pressed ? (
          <button className="row-cansel" onClick={handlePressedSave}>
            <img className="cansel"
            src={Cansel}
            alt="cansel"
            />
          </button>
        ) : (
          <button className="row-delete" onClick={handlePressedEdit}>
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