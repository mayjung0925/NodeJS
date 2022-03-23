const path = require('path');
const fs = require('fs');



let dataPath = path.join(__dirname,'../chirps.json');
//part 1 read  the file chirps.json and output the chirps to the console
fs.readFile(dataPath ,{
    encoding :'utf-8'
},(err,data)=>{
    let chirps = JSON.parse(data);
    console.log(chirps);
})

