const express = require('express');
const chirpStore = require('../chirpstore');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send(chirpStore.GetChirps())
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body)
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    chirpStore.UpdateChirp(req.params.id, req.body);
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    chirpStore.DeleteChirp(req.params.id);
});


module.exports = router;    