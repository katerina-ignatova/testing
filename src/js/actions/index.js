import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = article => {

  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(rawData => {
        return rawData.json();
      })
      .then(d => {
        dispatch({
          type: ADD_ARTICLE, payload: {
            title: d[0].name,
            id: article.id
          }
        });
      });
  }
};