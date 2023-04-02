const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'You must enter a title']
        },
        image: {
            type: String,
            required: [true, 'You must enter an image']
        },
        director: {
            type: String,
            required: [true, 'You must enter a director']
        },
        runtime: {
            type: Number,
            required: [true, 'You must enter a release date'],
            defeault: 0
        },
        rottenTomatoes: {
            type: Number,
            default: 0
        },
        releaseDate: {
            type: String,
            required: [true, 'You must enter a release date']
        },
        genre: {
            type: String,
            required: [true, 'You must enter a genre']
        }
    },
    {
        timestamps: true
    }
);

const Movies = mongoose.model('movie', moviesSchema);

module.exports = Movies;