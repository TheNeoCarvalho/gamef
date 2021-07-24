const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false

    });

    mongoose.Promise = global.Promise;

module.exports = mongoose;