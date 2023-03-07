const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// view engine
app.set('view engine', 'ejs')

// listen for request 
app.listen(3000);

// middleware
// app.use((req,res,next) => {
//     console.log('Request Details')
//     console.log('Host:', req.hostname)
//     console.log('Path:', req.path)
//     console.log('Method:', req.method)
//     next();
// })

// middleware & static file
app.use(express.static('public'));

// morgan
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    // res.send('HAYAI')
    blog = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index', {title: 'homepage', blogs: blog}) 
})

app.get('/about', (req,res)=>{
    // res.send('About HAYAI')
    res.render('about', {title: 'about'})
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'create new blog'})
})

// 404
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
})


