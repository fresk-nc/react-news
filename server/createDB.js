const mongoose = require('./mongoose.js');
const ArticleModel = require('./models/Article.js');
const fakeData = require('./fakeData.json');

function createArticles() {
    fakeData.forEach((item) => {
        new ArticleModel(item).save();
    });
}

module.exports = function() {
    mongoose.connection.on('open', () => {
        const db = mongoose.connection.db;

        db.dropDatabase((err) => {
            if (err) {
                throw err;
            }

            createArticles();
        });
    });
};
