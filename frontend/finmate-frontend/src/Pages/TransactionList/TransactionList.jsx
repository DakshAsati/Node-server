import { useEffect, useState } from "react";
import axios from "axios";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await axios.get("/api/transactions/userId"); // Replace with actual userId
                setTransactions(res.data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            {transactions.map((txn) => (
                <div key={txn._id}>
                    <p>{txn.type}: ₹{txn.amount} ({txn.category}) - {txn.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
