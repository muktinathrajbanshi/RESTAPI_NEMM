const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri = "mongodb+srv://muktinathrajbanshi_db_user:0atM6dJbqn5cAUS7@muktinathapi.qrtyles.mongodb.net/MuktinathAPI?appName=MuktinathAPI";

const connectDB = async () => {

    try {
        console.log("connect db");
        await mongoose.connect(uri);
        console.log("✅ MongoDB connected");
        
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
        
    }

};

module.exports = connectDB;