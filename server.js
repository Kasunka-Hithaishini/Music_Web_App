const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port=6900;

const app = express();

app.use(express.static('./dist'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
