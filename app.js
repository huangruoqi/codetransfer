const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Code = require('./modules/code');
const fs = require('fs');
const html2pug = require('html2pug');
const hljs = require('highlight.js');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/nodekb', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

var isRefreshed = false;


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    fs.readFile('./cs3310hw1.java', 'utf-8', (err, data)=> {
            res.render('index', { code:data} );
    })
})

app.get('/refresh', (req, res) => {

})

app.post('/', (req, res) => {
    // Get string from req.code

    // Save code to mongodb
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started...');
})
