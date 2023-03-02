// global object


// global == windows

// console.log(global)

// global.setTimeout(() => {
//     console.log('finish')
// },3000)

setTimeout(() => {
    console.log('finish')
    clearInterval(int)
},3000)

const int = setInterval(()=>{
    console.log('in the Interval')
},1000)