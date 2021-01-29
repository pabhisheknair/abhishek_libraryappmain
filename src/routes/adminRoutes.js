const express = require('express');
const adminRouter = express.Router(); 
const Bookdata = require('../model/bookdata');
const Authordata = require('../model/authordata');
const alert = require('alert');

function router(nav){

    adminRouter.get('/', function(req, res)
    {
        res.render("admin",
        {
            nav, title: 'Admin Login' 
        });

    });

    adminRouter.get('/admindash', function(req, res)
    {
        res.render("admindash",
        {
            nav, title: 'Admin Panel' 
        });

    });

    adminRouter.get('/addbook', function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("addbook",
            {
                nav, title: 'Books', books  
            });
        })
        
    }); 

    adminRouter.get('/addauthor', function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("addauthor",
            {
                nav, title: 'Authors', authors 
            });
        })
        
    }); 

    adminRouter.get('/addb', function(req,res){

        var item = {
            title: req.query.title,
            author: req.query.author,
            genre: req.query.genre,
            image: req.query.image
        }

        Bookdata.findOne({title: item.title, author: item.author}) 
        .then(book=>{
            if(book){
                alert("Book already exists in database!");
                res.redirect('/admin/addbook');
            }
            else{
                var newbook = Bookdata(item);
                newbook.save();
                alert("Book added successfully!");
                res.redirect('/admin/addbook');
            }
        })

    });

    adminRouter.post('/adda', function(req,res){

        var item = {
            author: req.body.author,
            books: req.body.books,
            genre: req.body.genre,
            image: req.body.image
        }

        Authordata.findOne({author: item.author, books: item.books}) 
        .then(author=>{
            if(author){
                alert("Author already exists in database!");
                res.redirect('/admin/addauthor');
            }
            else{
                var newauthor = Authordata(item);
                newauthor.save();
                alert("Author added successfully!");
                res.redirect('/admin/addauthor');
            }
        })
        
    });

    adminRouter.get('/books/:id', function(req,res){
        const id = req.params.id; 
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("updatebook",
            {
                nav, title: 'Update book details', book
            });
        })
        
    }); 

    adminRouter.get('/authors/:id', function(req,res){
        const id = req.params.id; 
        Authordata.findOne({_id: id})
        .then(function(author){
            res.render("updateauthor",
            {
                nav, title: 'Update author details', author
            });
        })
    }); 

    adminRouter.post('/updateb/:id', function(req,res){

        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }

        const id = req.params.id;
        Bookdata.findByIdAndUpdate(id, {title: item.title, author: item.author, genre: item.genre, image: item.image})
        .then(book=>{
            if(book){
                alert("Book details are updated!");
                res.redirect('/admin/books/' + book.id);
            }
        })
    }); 

    adminRouter.post('/deleteb/:id', function(req,res){

            const id = req.params.id;
            Bookdata.findByIdAndDelete(id)
            .then(book=>{
                if(book){
                    alert("Book has been deleted from database!");
                    res.redirect('/admin/addbook');
                }
            })
        
    }); 

    adminRouter.post('/updatea/:id', function(req,res){

        var item = {
            author: req.body.author,
            books: req.body.books,
            genre: req.body.genre,
            image: req.body.image
        }

        const id = req.params.id;
        Authordata.findByIdAndUpdate(id, {author: item.author, books: item.books, genre: item.genre, image: item.image})
        .then(author=>{
            if(author){
                alert("Author details are updated!");
                res.redirect('/admin/authors/' + author.id);
            }
        })
    }); 

    adminRouter.post('/deletea/:id', function(req,res){

            const id = req.params.id;
            Authordata.findByIdAndDelete(id)
            .then(author=>{
                if(author){
                    alert("Author has been deleted from database!");
                    res.redirect('/admin/addauthor');
                }
            })
        
    }); 

    return adminRouter;
 
}

module.exports = router;