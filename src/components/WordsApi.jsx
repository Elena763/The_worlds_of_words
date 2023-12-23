import { observer, inject } from 'mobx-react';
import Loader from "./Loader/Loader.jsx";
import Error from "./Page404/Page404.jsx";

function WordsApi({ children, wordStore }) {
  if (wordStore.isLoading) {
    return <Loader />;
  }

  if (wordStore.error) {
    return <Error />;
  }

  return <>{children}</>;
}

export default inject(['wordStore'])(observer(WordsApi));