// JavaScript source code
const express = require('express');

const app = new express();
const nav = [
    {
        link: '/books', name: 'Books'
    },
    {
        link: '/authors', name: 'Author'
    },
    {
        link: '/signup', name: 'SignUp'
    },
    {
        link: '/signin', name: 'SignIn'
    },
    {
        link: '/addbook', name: 'Add Book'
    },
    {
        link: '/addAuthor', name: 'Add Author'
    }
];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signinRouter = require('./src/routes/signinRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);
app.use(express.static('./public'));


app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/addbook', addbookRouter);
app.use('/addauthor', addauthorRouter);

app.get('/', function (req, res) {
    res.render("index",
        {
           nav, 
            title:'Library'
        });
});





app.listen(5000);