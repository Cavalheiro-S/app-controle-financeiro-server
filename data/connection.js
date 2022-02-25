require("dotenv/config");
const mongoose = require("mongoose");

function makeConnectionWithDatabase() {
    mongoose.connect(process.env.MONGODB_CONNECTION, (err) => {
        if (err) throw err;
        console.log("Database connected");
    })
}

module.exports = makeConnectionWithDatabase;