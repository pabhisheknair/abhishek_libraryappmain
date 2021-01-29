const express = require('express');
const loginRouter = express.Router();
const Userdata = require('../model/userdata');
const alert = require('alert'); 

function router(nav){

    loginRouter.get('/', function(req, res)
    {
        res.render("login",
        {
            nav, title: 'Login' 
        });

    });

    loginRouter.post('/check', function(req, res)
    {
        var item = {
            email: req.body.email,
            password: req.body.password
        }

        Userdata.findOne({email: req.body.email, password: req.body.password})
            .then(user=>{
                if(user){
                    alert("Login successful!");
                    res.redirect('/dashboard');
                }
                else{
                    alert("Email and Password donot match.");
                }
            })
        
        
    });

    return loginRouter;

}

module.exports = router;