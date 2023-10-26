//import AddSave from "../Save/AddSave.jsx";
import Delete from "./../../assets/icons/trash.svg";
import Edit from "./../../assets/icons/pencil.svg";
import Save from "./../../assets/icons/save.svg"
import "./tablerow.scss";
import { useState } from "react";


function Tablerow(props)
{
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="tablerow">
      <div className="row-english">{props.english}</div>
      <div className="row-transcription">{props.transcription}</div>
      <div className="row-russian">{props.russian}</div>
      <div className="row-tags">{props.tags}</div>
      <div className="edit-block">
        <button className="row-edit" onClick={handleEdit}>
          <img className="edit"
          src={Edit}
          alt="edit"
          />
        </button>
        <button className="row-save">
          <img className="save"
          src={Save}
          alt="save"
          />
        </button>
        </div>
      <button className="row-delete">
      <img className="delete" src={Delete} alt="delete"></img>
      </button>
  </div>
  );
}
export default Tablerow;