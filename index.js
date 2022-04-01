const express = require('express');
const exphbs = require('express-handlebars');
const api = require('./api');

const app = express();
const hbs = exphbs.create({
  partialsDir: 'views/partials',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const { data } = await api.get();

    // Criar função ao clicar no botão

    const { title, overview, poster_path } = data.results[0];
    const img_url = IMG_URL + poster_path;
    res.render('movie', { title, overview, img_url });
  } catch (err) {
    console.error(err);
  }
});

app.listen('3000', () => {
  console.log('Porta 3000 funcionando...');
});
