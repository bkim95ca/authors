const AuthorControllers = require('../controllers/author.controller')

module.exports = app => {
    app.get('/home', AuthorControllers.findAllAuthors)
    app.get('/:id', AuthorControllers.findOneAuthor)
    app.post('/new', AuthorControllers.createAuthor)
    app.put('/edit/:id', AuthorControllers.updateAuthor)
    app.delete('/delete/:id', AuthorControllers.deleteAuthor)
}