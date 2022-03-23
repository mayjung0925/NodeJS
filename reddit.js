const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, './popular-articles.json')


request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);

    let dataArray = []

    JSON.parse(body).data.children.forEach(item => {
        obj = {
            title: item.data.title,
            author: item.data.author,
            url: item.data.url
        }
        dataArray.push(obj);

        fs.writeFile(dataPath, JSON.stringify(dataArray), (err) => {
            if (err) console.log(err);
        })


    });

});