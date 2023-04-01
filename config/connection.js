const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_URI);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error', error);
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
})