'use strict';

const express = require('express');
const router = express.Router();

const ArticleModel = require('./models/Article.js');

router.get('/api/articles', (req, res, next) => {
    ArticleModel
        .find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            next(err, req, res);
        });
});

router.get('/api/articles/:id', (req, res, next) => {
    ArticleModel
        .findOne({ id: req.params.id })
        .then((item) => {
            if (!item) {
                res.status(404);
                return res.send({ error: 'Not found' });
            }

            res.send(item);
        })
        .catch((err) => {
            next(err, req, res);
        });
});

module.exports = router;
