const express = require('express');
const PORT = 4000;
const apiRouter = require('./routes');
const app = express();



app.use(express.json());
app.use('/api', apiRouter)



app.listen(PORT, console.log(`Server running on port ${PORT}`));