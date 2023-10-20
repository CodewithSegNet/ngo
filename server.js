const express = require('express');
const http = require('http');
const reload = require('reload');

const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server Has Started On Port: ${PORT}`)
});

 
reload(app);