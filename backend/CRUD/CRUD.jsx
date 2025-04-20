const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

// Add a transaction
router.post("/", async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch all transactions for a user
router.get("/:userId", async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.params.userId });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Edit a transaction
router.put("/:id", async (req, res) => {
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a transaction
router.delete("/:id", async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
