module.exports = {
    port: 8000,
    mongoose: {
        uri: process.env.DB_URI || 'localhost/react-news',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    }
};
