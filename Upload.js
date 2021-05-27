const fetch = require('node-fetch');
const fs = require('fs');


fs.readFile('./source.txt', 'utf-8', (err, data) => {
    let body = {
        code: data
    }
    fetch('https://codetransfer.herokuapp.com/upload', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
})
