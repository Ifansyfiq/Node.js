// import file system
const { throws } = require('assert')
const fs = require('fs')



// reading files
fs.readFile(' ./Docs/blog1.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
console.log('haha lame')





// writing files
fs.writeFile('./Docs/blog1.txt', 'hiiiii, hiii', () => {
    console.log('write done')
}) 

fs.writeFile('./Docs/blog2.txt', 'hayoiii', () => {
    console.log('write done')
}) 


// directories
if (!fs.existsSync('./assests')){ //check if directories is existed or not
    fs.mkdir('./assests', (err)=>{ // make new directory
        if (err)
        console.log(err)
    }) 
      console.log('done make directory')    
}
else
fs.rmdir('./assests', err=>{ // remove directory
    if (err){
        console.log(err)
    }
    console.log('done delete directory')
})
        




// deleting files
if (fs.existsSync('./Docs/deleteme.txt')){  //check if files is existed or not
    fs.unlink('./Docs/deleteme.txt', (err) => { //delete files
        if (err) throw err;
        console.log('file was deleted');
      })
}



