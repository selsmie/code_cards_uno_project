const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('code_cards_uno_project');
        const cardsCollection = db.collection('cards');
        const cardsRouter = createRouter(cardsCollection);
        app.use('/api/code_cards/cards', cardsRouter);
        const leaderboardCollection = db.collection('leaderboard');
        const leaderboardRouter = createRouter(leaderboardCollection);
        app.use('/api/code_cards/leaderboard', leaderboardRouter);
    })
    .catch(console.error);

app.listen(3000, function() {
    console.log(`Listening on port: ${ this.address().port }`)
})
