import React, { useState, useEffect, useContext } from "react";
import Tablerow from "../Tablerow/Tablerow.jsx";
import "./table.scss";
//import {words} from "../words.js";
import { WordsContext } from '../WordContext.jsx';

function Table() {
  const { words, deleteWords } = useContext(WordsContext);
  const [wordCollection, setwordCollection] = useState(words);

  useEffect(() => {
    setwordCollection(words);
  }, [words]);

  const onDelete = (id) => {
    deleteWords(id);
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
            {wordCollection.map((word, index) => (
              <Tablerow
              index={index} key={word.id} {...word} onDelete={onDelete}
              />
            ))}
        </tbody>
      </table>
    );
  }
  export default Table;