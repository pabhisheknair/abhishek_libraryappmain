const express = require('express');
const signupRouter = express.Router(); 
const Userdata = require('../model/userdata');
const alert = require('alert');

function router(nav){

    signupRouter.get('/', function(req, res)
    {
        res.render("signup",
        {
            nav, title: 'Sign Up' 
        });
    });

    signupRouter.post('/add', function(req, res)
    {
        var item = {
            name: req.body.name,
            dob: req.body.dob,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            password: req.body.password
        }

        Userdata.findOne({email: item.email}) .then(user=>{
            if(user){
                alert("Email already registered!");
                res.redirect('/signup');
            }
            else{
                var newuser = Userdata(item);
                newuser.save();
                alert("Signup successful!");
                res.redirect('/login');
            }
        })
        
    });

    
    return signupRouter;

}

module.exports = router;