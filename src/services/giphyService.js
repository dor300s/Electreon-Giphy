import axios from 'axios';

const API_KEY = 'rCA24L3n5glArYrUDZXZQCMMtcOMnnYc';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';


export const get = (q, offset = 0) => axios.get(`${BASE_URL}?q=${q}&api_key=${API_KEY}&offset=${offset}`).then(res => res.data);
