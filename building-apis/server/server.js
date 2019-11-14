const express = require('express');
const PORT = 4000;
const apiRouter = require('./routes');
const app = express();
const path = require('path')


app.use(express.json());
app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'chirps.json'))
})


app.listen(PORT, console.log(`Server running on port ${PORT}`));