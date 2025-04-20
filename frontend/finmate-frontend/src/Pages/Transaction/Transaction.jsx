import { useState } from "react";
import axios from "axios";

const Transaction = () => {
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = { amount, type, category, description };
        try {
            await axios.post("/api/transactions", transaction);
            alert("Transaction added!");
        } catch (error) {
            console.error("Error adding transaction:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default Transaction;
