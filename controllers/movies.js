const express = require('express');
const router = express.Router();

let { movies } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myMovies = await movies.find({});
        res.render('index.ejs', { movies: myMovies });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/new', (req, res) => {
    res.render('new.ejs');
})

router.get('/genre/:genre', async (req, res, next) => {
    try {
        const moviesByGenre = await movies.find({ genre: req.params.genre });
        res.render('show_genre.ejs', { movies: moviesByGenre });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myMovie = await movies.findById(req.params.id);
        res.render('show.ejs', { movie: myMovie });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id/edit', async (req, res, next) => {
    try {
        const movieToBeEdited = await movies.findById(req.params.id);
        res.render('edit.ejs', { movie: movieToBeEdited });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id/delete', async (req, res, next) => {
    try {
        const movieToBeDeleted = await movies.findById(req.params.id);
        res.render('delete.ejs', { movie: movieToBeDeleted });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newMovie = await movies.create(req.body);
        res.redirect('/movies');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedMovie = await movies.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/movies/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteMovie = await movies.findByIdAndDelete(req.params.id);
        res.redirect('/movies');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;