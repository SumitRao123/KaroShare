require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect(`mongodb+srv://KaroShare:dEqOb9pmliaKEMP5@cluster1.bklph.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).on('error', function (err){
        console.log(err);
    })
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
