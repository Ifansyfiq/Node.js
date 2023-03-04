const fs = require('fs')

const readStream = fs.createReadStream('./Docs/blog3.txt' , {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./Docs/blog4.txt')

readStream.on('data', (chunk) => {
    // console.log('NEW CHUNKS')
    // console.log(chunk)
  
    writeStream.write('NEW CHUNKS')
    writeStream.write(chunk)


})

// piping 
    // readStream.pipe(writeStream)