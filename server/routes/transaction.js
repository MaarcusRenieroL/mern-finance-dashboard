import express from "express";

import Transaction from "../models/Product.js";

const router = express.Router();

router.get("/transactions", async (request, response) => {
    try {
        const transactions = await Transaction.find().limit(50).sort({ createdOn: -1 });
        response.status(200).json(transactions);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
})

export default router