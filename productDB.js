require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/product");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        
    }
}

start();