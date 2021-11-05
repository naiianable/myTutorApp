const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newTutor = new Schema({
    email: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        min: 8,
        required: true
    },

    firstname: {
        type: String,
        min: 1,
        required: true
    },

    lastname: {
        type: String,
        min: 1,
        required: true
    }
});

const Tutor = mongoose.model('Tutor', newTutor);

module.exports = Tutor;