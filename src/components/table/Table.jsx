import Tablerow from "../tablerow/Tablerow.jsx";
import "./table.scss";
import {words} from "../words.js"

function Table() {
    return (
      <table className="table">
        <thead className="table-title">
          <th className="table-english">English</th>
          <th className="table-transcription">Transcription</th>
          <th className="table-russian">Russian</th>
          <th className="table-tags">Tags</th>
          <th className="table-edit">Edit</th>
          <th className="table-delete">Delete</th>
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