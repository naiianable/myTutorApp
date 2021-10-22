const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {

    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', () => {
        console.log('Connected to DB!')
    });

    return mongoose.connect(config.dbURL)
}