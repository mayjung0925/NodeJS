const path = require ('path');
const fs = require ('fs') 
const rp = require('request-promise');


let dataPath = path.join(__dirname,'./downloads/downloaded-files.json');

rp('https://reddit.com/r/popular.json')
.then((res)=> {
    fs.writeFile(dataPath, res, (err)=>{
        if(err) console.log(err)
    })
)
.catch((err)=> console.log(err));