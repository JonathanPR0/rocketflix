const axios = require('axios');
const API_KEY = 'api_key=dc52dfb3a5d024598324ffeb22085003';
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIES = '/discover/movie?sort_by=popularity.desc&';
const language = '&language=pt-BR';
const api = axios.create({
  baseURL: `${BASE_URL}${MOVIES}${API_KEY}${language}`,
});

module.exports = api;
