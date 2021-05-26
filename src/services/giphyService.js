import axios from 'axios';

const API_KEY = 'rCA24L3n5glArYrUDZXZQCMMtcOMnnYc';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';


export const get = async (q = 'hi') => axios.get(`${BASE_URL}?q=${q}&api_key=${API_KEY}`).then(res => res.data);
