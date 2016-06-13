'use strict';

const mongoose = require('../mongoose.js');

const articleSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    title: String,
    content: String,
    type: String
});

module.exports = mongoose.model('Article', articleSchema);
