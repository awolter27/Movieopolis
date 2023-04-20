const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcryptjs');

router.get('/signin', (req, res) => {
    res.render('users/signin.ejs');
})

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
})


// router.get('/signout', (req, res) => {

// })

module.exports = router;