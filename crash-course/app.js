const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes'); 
//const { result } = require('lodash');

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
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

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


app.get('/', (req,res)=>{
    // res.send('HAYAI')
    blog = res.redirect('/blogs')
})

app.get('/about', (req,res)=>{
    // res.send('About HAYAI')
    res.render('about', {title: 'about'})
})


// blog routes
app.use('/blogs' ,blogRoutes);


// 404
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
});


