const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const elementSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    subcategory: {
        type: Array, 
        required: true,
        trim: true
    }
})

const Element = mongoose.model("Element", elementSchema)

module.exports = Element