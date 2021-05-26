const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

var isRefreshed = false;


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    console.log('get');
    fs.readFile('./code.txt', 'utf-8', (err, data)=> {
        res.render('index', { code:data } );
    })
})

app.post('/', (req, res) => {
    if(isRefreshed) {
        res.redirect('/');
        isRefreshed = false;
    }
    else {
        res.send();
    }
})

app.post('/upload', (req, res) => {
    if (req.body.code) {
        fs.writeFile('./code.txt', req.body.code, 'utf-8', (err) => {
            res.send('success');
            isRefreshed = true;
        })
    }
    else {
        res.send('failed');
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started...');
})
