import Tablerow from "../tablerow/Tablerow.jsx";
import "./table.scss";
import {words} from "../words.js"

function Table() {
    return (
      <div className="table">
        <div className="table-title">
          <div className="table-english">English</div>
          <div className="table-transcription">Transcription</div>
          <div className="table-russian">Russian</div>
          <div className="table-tags">Tags</div>
          <div className="table-edit">Edit</div>
          <div className="table-delete">Delete</div>
        </div>
        <div className="row">
          {
            words.map((word)=>
              <Tablerow
              key={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
              />
            )
          }
        </div>
      </div>
    );
  }
  export default Table;