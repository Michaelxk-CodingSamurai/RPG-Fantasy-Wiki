const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: false,
        trim: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    elements: {
        type: Array,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: false,
        trim: true
    }



})

const Adventure = mongoose.model("Adventure", adventureSchema)

module.exports = Adventure