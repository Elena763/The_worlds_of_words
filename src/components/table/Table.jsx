import { observer, inject } from "mobx-react";
import Tablerow from "../Tablerow/Tablerow.jsx";
import "./table.scss";

function Table({ wordStore }) {
    const onDelete = (id) => {
      wordStore.deleteWords(id);
    };
    return (
      <table className="table">
        <thead className="tableTitle">
          <tr>
            <td className="tableEnglish">English</td>
            <td className="tableTranscription">Transcription</td>
            <td className="tableRussian">Russian</td>
            <td className="tableTags">Tags</td>
            <td className="tableEdit">Edit</td>
            <td className="tableDelete">Delete</td>
          </tr>
        </thead>
        <tbody className="row">
          {
            wordStore.words.map((word, index)=>(
              <Tablerow
              index={index}
              key={word.id}
              word={word}
              onDelete={onDelete}
              />
              ))}
        </tbody>
      </table>
    );
}
export default inject(['wordStore'])(observer(Table));