const fs = require("fs");
let result= {
    data: ''
};

// fs.readFile('index.txt','utf-8', (error,data)=>{
//     console.log('error', error);
    
//     console.log('data', data);
// });

const readFile = async () =>{
    result.data = await fs.readFileSync('index.txt', { encoding: 'utf-8'});
}

readFile();
console.log(result);


// callback --> 
// promises -->