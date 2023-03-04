const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    // request   
    console.log(req.url, req.method)

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
            break;
        case '/about':
            path+='about.html'
            break;
        default: path+='404.html'
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
