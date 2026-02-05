const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri = "";

const connectDB = async (uri) => {

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