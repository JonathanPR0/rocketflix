const API_KEY = 'api_key=dc52dfb3a5d024598324ffeb22085003';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const MOVIES = '/discover/movie?sort_by=popularity.desc&';
const language = '&language=pt-BR';
const baseURL = `${BASE_URL}${MOVIES}${API_KEY}${language}`;

const btn = document.querySelector('#find');
const main = document.querySelector('#movie');

const cover = document.querySelector('.cover');
const title = document.querySelector('.movieName');
const description = document.querySelector('.movieDescription');
let id = 0;
btn.addEventListener('click', async (event) => {
  event.preventDefault();
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      const movieData = data.results[id];
      console.log(movieData);
      if (movieData) {
        cover.src = IMG_URL + movieData.poster_path;
        title.innerText = movieData.title;
        description.innerText = movieData.overview;
      } else {
        cover.src = './assets/Poster.png';
        title.innerText = `Ops, hoje não é dia de assistir filme.
        Bora codar! 🚀`;
        description.innerText = '';
      }
    });
  main.style.animation;
  main.style.display = 'flex';
  id++;
});
