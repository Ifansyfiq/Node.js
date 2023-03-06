const express = require('express')

// express app
const app = express();

// view engine
app.set('view engine', 'ejs')

// listen for request 
app.listen(3000);

app.get('/', (req,res)=>{
    // res.send('HAYAI')
    res.render('index') 
})

app.get('/about', (req,res)=>{
    // res.send('About HAYAI')
    res.render('about')
})

app.get('/blogs/create', (req,res) => {
    res.render('create')
})

// 404
app.use((req,res)=>{
    res.status(404).render('404')
})


