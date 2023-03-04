const http = require('http')

const server = http.createServer((req, res)=>{
        console.log('request added')
})

server.listen(3000, 'localhost', ()=>{
    console.log('listen to port 3000')
})
