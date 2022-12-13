import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '30655512-3053f8195b0bf6b7d34c645e0';
const searchParams = 'image_type=photo&orientation=horizontal';
const PER_PAGE = 'per_page=12';

export const fetchImages = async (query, page) => {
  const pesponse = await axios.get(`
  ?key=${API_KEY}&q=${query}&${searchParams}&per_page=${PER_PAGE}&page=${page}`);

  return pesponse.data;
};
