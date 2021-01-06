// JavaScript source code
const express = require('express');
const addbookRouter = express.Router();
function router(nav) {
    addbookRouter.get('/', function (req, res) {
        res.render("addbook", {
            nav,
            title: 'Add Book'
        });
    });
    return addbookRouter;
}
module.exports = router;