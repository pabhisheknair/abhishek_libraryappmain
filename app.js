const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const nav = [
    {link: "/dashboard", name: "My Library"},
    {link:"/books", name:"Books"}, 
    {link: "/authors", name:"Authors"},
    {link: "/admin", name:"Admin panel"},
    {link: "/", name: "Log out"}
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const acRouter = require('./src/routes/acRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./src/views');

app.use(urlencoded({extended:true}));

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/dashboard', acRouter);
app.use('/admin', adminRouter);

app.get('/', function(req, res){
    res.render("index", 
    {
        nav, title: 'Library'  
    });

});


app.listen(port, ()=>{console.log("Server ready at " + port)});
