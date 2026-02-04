const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri = "mongodb+srv://muktinathrajbanshi_db_user:0atM6dJbqn5cAUS7@muktinathapi.qrtyles.mongodb.net/MuktinathAPI?appName=MuktinathAPI";

const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;