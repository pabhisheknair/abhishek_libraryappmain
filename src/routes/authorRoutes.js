const express = require('express');
const authorsRouter = express.Router(); 
const Authordata = require('../model/authordata');

function router(nav){
    authorsRouter.get('/', function(req,res){
    Authordata.find()
    .then(function(authors){
        // authorsRouter.get('/', function(req,res){
            res.render("authors",
            {
                nav, title: 'Authors', authors  
            });
        });
    });
    
    
    authorsRouter.get('/:id', function(req, res){
        const id = req.params.id; 
        Authordata.findOne({_id: id})
        .then(function(author){
        res.render("author",
        {
            nav, title: 'Authors',author 
        });
    });
    });    
    
    return authorsRouter;

}

module.exports = router;