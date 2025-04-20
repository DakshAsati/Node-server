// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Profile from './Components/Profile/profile.jsx';
import Transaction from "./Pages/Transaction/Transaction.jsx";
import TransactionList from "./Pages/TransactionList/TransactionList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/TransactionList" element={<TransactionList />} />
      </Routes>
    </Router>
  );
}

export default App;
