const Author = require("../models/author.models")

//READ ALL 
module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => {
        res.json(allAuthors)
    })
    .catch(err => res.json({ message: 'Something went wrong with finding all authors', error: err}));
}

//READ ONE
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id : req.params.id})
        .then((oneAuthor) => {res.json(oneAuthor)})
        .catch(err => res.json({message: 'Something went wrong with finding one author', error: err}))
}

//CREATE
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => {res.json(newAuthor)})
        .catch(err => res.json({message: 'Something went wrong with creating an author', error: err}))
}

//UPDATE
module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedAuthor) => {res.json(updatedAuthor)})
        .catch(err => res.json({message: 'Something went wrong when trying to update an author'}))
}

//DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id : req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'Something went wrong when trying to delete an author', error: err}))
}