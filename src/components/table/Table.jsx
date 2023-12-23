import Tablerow from "../Tablerow/Tablerow.jsx";
import "./table.scss";
import {words} from "../words.js"

function Table() {
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
            words.map((word)=>(
              <Tablerow
              key={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
              />
              ))}
        </tbody>
      </table>
    );
  }
  export default Table;