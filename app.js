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
    isRefreshed = false;
    fs.readFile('./code.txt', 'utf-8', (err, data)=> {
        res.render('index', { 
            code:data,
            showUpload: true
        } );
    })
})
app.get('/upload', (req, res) => {
    res.render('upload', {
        showUpload: false
    });
})

app.post('/', (req, res) => {
    if(isRefreshed) {
        res.redirect('/');
    }
    else {
        res.send();
    }
})

app.post('/upload', (req, res) => {
    if (req.body.code) {
        fs.writeFile('./code.txt', req.body.code, 'utf-8', (err) => {
            isRefreshed = true;
            res.send('success')
        })
    }
    else {
        res.status(500).send('failed');
    }
})

app.post('/upload/input', (req, res) => {
    fs.writeFile('./code.txt', req.body.code, 'utf-8', (err) => {
        isRefreshed = true;
        res.redirect('/')
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started...');
})
