const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect mongodb
const dbURI = 'mongodb+srv://hayai:fEE!t_AYqrn4nNH@node-tuts.fpok7xg.mongodb.net/node-tuts'

// connect mongoose & listen for request
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000)) // after db connect then listen to request
    .catch((err) => console.log(err))

// view engine
app.set('view engine', 'ejs')


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


// mongoose & mongo tests
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//       title: 'new blog',
//       snippet: 'about my new blog',
//       body: 'more about my new blog'
//     })
  
//     blog.save()
//       .then(result => {
//         res.send(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });


// morgan
app.use(morgan('dev'));

app.get('/', (req,res)=>{
    // res.send('HAYAI')
    blog = res.redirect('/blogs')
})

app.get('/about', (req,res)=>{
    // res.send('About HAYAI')
    res.render('about', {title: 'about'})
})

// blogs routes
app.get('/blogs', (req,res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', {blogs: result, title: 'All Blogs'})
        })
        .catch(err => {
            console.log(err)
        })
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'create new blog'})
})

// 404
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
})


