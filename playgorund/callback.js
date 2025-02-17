// sum of two numbers

function sum(a,b,cb) {
    let result;
    result = a+b;
    cb(null, result)
    
}
console.log('first');

function timer(result, cb){
    setTimeout(()=>{
        cb(null,result)
    }, 3000)
}

let promise = new Promise((res, rej) =>{
    setTimeout(()=>{
        res('This is promise')
    },4000)
});

console.log('second');

timer('This line has been executed', (error,result) =>{
    console.log(result);
    
});

promise.then((data) =>{
    console.log(data); 
});

console.log('third');

// callback q --> minor and major
// sum(10,20,(error, data)=>{
//     console.log(data); 
// });