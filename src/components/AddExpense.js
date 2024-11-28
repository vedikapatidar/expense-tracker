import React, { useState } from "react";

const AddExpense = ({ participants, onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState(participants[0] || "");
  const [splitEqually, setSplitEqually] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ description, amount: parseFloat(amount), payer, splitEqually });
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Payer</label>
        <select value={payer} onChange={(e) => setPayer(e.target.value)}>
          {participants.map((participant, index) => (
            <option key={index} value={participant}>
              {participant}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={splitEqually}
            onChange={(e) => setSplitEqually(e.target.checked)}
          />
          Split Equally
        </label>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
