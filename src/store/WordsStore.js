import React from 'react';
import { makeAutoObservable, runInAction } from 'mobx';

const getWords = () =>
    fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error ...");
        })
        .then((response) => response);

export default class WordsStore {

    words = [];
    error = null;
    isLoaded = false;
    isLoading = false;

    constructor(){
        makeAutoObservable(this);
    }

    loadData = async () => {
      if (this.isLoaded || this.isLoading) {
          return;
      }
      this.isLoading = true;
      const result = await getWords().catch((error) => (this.error = error));

      runInAction(() => {
          this.words = result;
          this.isLoading = false;
          this.isLoaded = false;
      });
  };

  wordAdd = async (word) => {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
          method: 'POST',
          body: JSON.stringify(word),
      })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Error ...");
          })
          .catch((error) => (this.error = error));

      runInAction(() => {
          this.loadData();
      });
  };

  wordDelete = async (id) => {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
          method: 'POST',
      })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Error ...");
          })
          .catch((error) => (this.error = error));

      runInAction(() => {
          this.loadData();
      });
  };

  wordEdit = async (word) => {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
          method: 'POST',
          body: JSON.stringify(word),
      })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Error ...");
          })
          .catch((error) => (this.error = error));

      runInAction(() => {
          this.loadData();
      });
  };
}