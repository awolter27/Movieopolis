const express = require('express');
const router = express.Router();
const { Movies } = require('../models');
const { seedData } = require('../models');

router.get('', async (req, res, next) => {
    try {
        let myMovies;
        if (req.query.s) {
            myMovies = await Movies.find({ title: req.query.s });
        } else {
            myMovies = await Movies.find({});
        }
        res.render('index.ejs', { Movies: myMovies });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/new', (req, res) => {
    res.render('new.ejs');
})

router.get('/seed', async (req, res, next) => {
    try {
        await Movies.deleteMany({});
        await Movies.insertMany(seedData);
        res.redirect('/movies');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/genre/:genre', async (req, res, next) => {
    try {
        const moviesByGenre = await Movies.find({ genre: req.params.genre });
        res.render('show_genre.ejs', { Movies: moviesByGenre });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myMovie = await Movies.findById(req.params.id);
        res.render('show.ejs', { Movie: myMovie });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id/edit', async (req, res, next) => {
    try {
        const movieToBeEdited = await Movies.findById(req.params.id);
        res.render('edit.ejs', { Movie: movieToBeEdited });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.get('/:id/delete', async (req, res, next) => {
    try {
        const movieToBeDeleted = await Movies.findById(req.params.id);
        res.render('delete.ejs', { Movie: movieToBeDeleted });
    } catch (err) {
        next();
        console.log(err);
    }
})

router.post('', async (req, res, next) => {
    try {
        const newMovie = await Movies.create(req.body);
        res.redirect('/movies');
    } catch (err) {
        next();
        console.log(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/movies/${req.params.id}`);
    } catch (err) {
        next();
        console.log(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteMovie = await Movies.findByIdAndDelete(req.params.id);
        res.redirect('/movies');
    } catch (err) {
        next();
        console.log(err);
    }
})

module.exports = router;