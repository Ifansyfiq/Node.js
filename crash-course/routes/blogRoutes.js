const express = require('express');
const Blog = require('../models/blog');

// define router 
const router = express.Router();



router.get('/blogs', (req,res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', {blogs: result, title: 'All Blogs'})
        })
        .catch(err => {
            console.log(err)
        })
})


router.post('/blogs', (req,res) => {
   const blog = new Blog(req.body)

   blog.save()
    .then(result => {
        res.redirect('/blogs')
    })
    .catch(err => {
        console.log(err)
    })
})


router.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'create new blog'})
})


router.get('/blogs/:id',  (req,res) => {
    const id = req.params.id //define id 

    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details'})
        })
        .catch(err => {
            console.log(err)
        })
})



router.delete('/blogs/:id', (req,res) => {
    const id = req.params.id 

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs'})
        })
        .catch(err => {
            console.log(err)
        })
})

// exports router to app.js
module.exports = router;

