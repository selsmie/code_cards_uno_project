const express = require('express');
// const ObjectId = require('Object')

const createRouter = function(collection) {
    const router = express.Router();

    router.get('/', (req, res) => {
        collection.find().toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            res.status(500)
            res.json({status: 500, error: err})
        })
    })






    return router
}

module.exports = createRouter
