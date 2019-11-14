const express = require('express');
const chirpStore = require('../chirpstore');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send(chirpStore.GetChirps())
    res.sendStatus(200)
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body)
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    chirpStore.UpdateChirp(req.params.id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    chirpStore.DeleteChirp(req.params.id);
    res.sendStatus(200)
});


module.exports = router;    