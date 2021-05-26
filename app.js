const express = require('express');
const path = require('path');
const fs = require('fs');

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

app.post('/refresh', (req, res) => {

})

app.post('/ppp', (req, res) => {
    // Get string from req.code
    console.log(req.body.code);
    res.send('success');
    // Save code to mongodb
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started...');
})
