import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";

import KeyPerformanceIndicators from "./models/KeyPerformanceIndicators.js";
import Product from "./models/Product.js";
import { kpis, products, transactions } from "./data/data.js";
import Products from "./models/Product.js";
import Transactions from "./models/Transaction.js";

// CONFIGURATIONS

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({
    policy: 'cross-origin'
}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

// MONGOOSE SETUP

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    // await mongoose.connection.db.dropDatabase()
    // KeyPerformanceIndicators.insertMany(kpis)
    // Products.insertMany(products)
    // Transactions.insertMany(transactions)

}).catch((err) => {
    console.log(err);
})
