import React, { useState } from "react";
import ParticipantList from "./components/ParticipantList";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BalanceSummary from "./components/BalanceSummary";
import './App.css';

function App() {
  const [participants, setParticipants] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAddParticipant = (name) => {
    if (!participants.includes(name)) {
      setParticipants([...participants, name]);
    }
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1>Shared Expense Tracker</h1>
      <ParticipantList participants={participants} onAddParticipant={handleAddParticipant} />
      <AddExpense participants={participants} onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <BalanceSummary participants={participants} expenses={expenses} />
    </div>
  );
}

export default App;
