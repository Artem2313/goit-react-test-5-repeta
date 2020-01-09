import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

export const fetchArticles = (querry = 'react') => {
  return axios.get(BASE_URL + querry);
};

export const dummy = () => null;
