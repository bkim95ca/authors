const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Name of author is required"],
        minlength: [2, "Name of author must be at least 2 characters"]
    }
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author