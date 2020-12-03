let request = require('request')
const cheerio = require('cheerio')
let fs = require("fs");
let http = (url) => {
    return new Promise((resolve, rej) => {
        request({
            url,
            method: 'get'
        }, (err, res, body) => {
            resolve(res)
        })
    })
}

http('https://pokemondb.net/sprites').then((res) => {
    const $ = cheerio.load(res.body)
    let list = Array.from($('.infocard-list a'))
    let name = []
    list.forEach((item) => {
        name.push(item.children[2].data)
    })
    name = JSON.stringify(name)
    fs.writeFile('sprites.json', name,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
     });
})