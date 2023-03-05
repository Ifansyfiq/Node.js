const express = require('express')

// express app
const app = express();

// listen for request 
app.listen(3000);

app.get('/', (req,res)=>{
    // res.send('HAYAI')
    res.sendFile('./views/index.html' , {root: __dirname})
})

app.get('/about', (req,res)=>{
    // res.send('About HAYAI')
    res.sendFile('./views/about.html' , {root: __dirname})
})


// redirect
app.get('/about-us' , (req,res)=>{
    res.redirect('/about')
})

// 404
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html' , {root: __dirname})
})


