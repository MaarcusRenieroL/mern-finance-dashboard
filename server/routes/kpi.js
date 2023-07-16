import express from "express";

import KeyPerformanceIndicators from "../models/KeyPerformanceIndicators.js";

const router = express.Router();

router.get("/kpis", async (request, response) => {
    try {
        const kpis = await KeyPerformanceIndicators.find();
        response.status(200).json(kpis);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
})

export default router