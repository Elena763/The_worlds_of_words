import { useState, useEffect, createContext } from "react";
import Loader from "./Loader/Loader.jsx";
import Error from "./Page404/Page404.jsx";

export const WordsContext = createContext();

function WordsContextProvider(props) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getWords();
  }, []);

  const getWords = () => {
    setIsLoading(true);
    fetch(
      "http://itgirlschool.justmakeit.ru/api/words"

    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error ...");
      })
      .then((response) => {
        setWords(response);
      })
      .catch((errors) => setError(errors))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const editWords = (word) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
      method: 'POST',
      body: JSON.stringify(word),
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors));
  };

  const deleteWords = (id) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: 'DELETE',
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors));
  };

  const addWords = (word) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
      method: 'POST',
      body: JSON.stringify(word),
    })
      .then(() => {
        getWords();
      })
      .catch((errors) => setError(errors));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <WordsContext.Provider
      value={{ words, isLoading, error, editWords, deleteWords, addWords }}
    >
      {props.children}
    </WordsContext.Provider>
  );
}

export default WordsContextProvider;