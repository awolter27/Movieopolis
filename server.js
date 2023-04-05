const express = require('express');
const app = express();
const PORT = 4000;

const methodOverride = require('method-override');

const moviesController = require('./controllers/movies.js');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));

app.use('/movies', moviesController);

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/*', (req, res) => {
    res.render('404.ejs');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})