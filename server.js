const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.post('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(8080);