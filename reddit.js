const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, './popular-articles.json')

// request data from the following website
request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);

    let dataArray = []

//convert body data into JS object and loop through each item to extract the following data; title, author, url
    JSON.parse(body).data.children.forEach(item => {
        obj = {
            title: item.data.title,
            author: item.data.author,
            url: item.data.url
        }
        dataArray.push(obj);// push each obj into dataArray which is in the request scope

//convert dataArray(JS) into JSON and write in the desiginated file 
        fs.writeFile(dataPath, JSON.stringify(dataArray), (err) => {
            if (err) console.log(err);
        })


    });

});