// JavaScript source code
const express = require('express');
const router = require('./bookRoutes');
const authorsRouter = express.Router();
function route(nav) {
    var authors = [
        {
            title: 'Joseph Barbera',
            author: 'Tom and Jerry',
            genre: 'Cartoon',
            img: "joseph.jfif"
        },
        {
            title: 'JK Rowling',
            author: 'Harry Potter',
            genre: 'Fantasy',
            img: "rowling.jfif"
        },
        {
            title: 'Vaikom Muhammed Basheer',
            author: 'Pathummayude Aadu',
            genre: 'Drama',
            img: "pabasheer.jfif"
        }
    ]
    authorsRouter.get('/', function (req, res) {
        res.render("authors", {
            nav,
            title: 'Library',
            authors
        });
    });

    authorsRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        res.render('author', {
            nav,
            title: 'Library',
            author: authors[id]
        });
    });
    return authorsRouter;
}

module.exports = route;