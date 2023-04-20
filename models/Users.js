const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'You must enter an email'],
            unique: [true, 'You have already created an accout with that email address']
        },
        username: {
            type: String,
            required: [true, 'You must enter a username'],
            unique: [true, 'You have already created an accout with that username']
        },
        password: {
            type: String,
            required: [true, 'You must enter a password']
        }
    },
    {
        timestamps: true
    }
);

const Users = mongoose.model('user', usersSchema);

module.exports = Users;