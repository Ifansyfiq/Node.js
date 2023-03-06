const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=>{
    // request   
   // console.log(req.url, req.method)

    //lodash
    const num = _.random(0 , 20) // pick random num between 0 - 20
    console.log(num)
    
    const greet = _.once(()=>{ //run only once
        console.log('hello')
    })

    greet()
    greet()

    // response (basic)
    // res.setHeader('Content-Type', 'text/html')
    
    // res.write('<p>Heloo</p>')

    // res.end()



    // return HTML pages
    res.setHeader('Content-Type', 'text/html')

// routing
    let path = './views/'
    switch (req.url) {
        case '/':
            path+='index.html'
            res.statusCode = 200
            break;
        case '/about':
            path+='about.html'
            res.statusCode = 200
            break;
        case '/about-me': //redirect (similar name but different file)
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
        default: path+='404.html'
            res.statusCode = 404
            break;
    }
     
    fs.readFile(path, (err,data)=>{
        if (err) throw err   

        //res.write(data)
        res.end(data)
    })

})


//listen to request
server.listen(3000, 'localhost', ()=>{
    console.log('listen to port 3000')
})
