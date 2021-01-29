const express = require('express');
const acRouter = express.Router(); 

function router(nav){

    acRouter.get('/', function(req, res)
    {
        res.render("dashboard",
        {
            nav, title: 'My Library' 
        });
    });

    return acRouter;

}

module.exports = router;