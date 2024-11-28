import React from "react";

const BalanceSummary = ({ participants, expenses }) => {
  const balances = {};

  participants.forEach((participant) => {
    balances[participant] = 0;
  });

  expenses.forEach((expense) => {
    const amountPerPerson = expense.splitEqually
      ? expense.amount / participants.length
      : expense.amount;

    participants.forEach((participant) => {
      if (participant === expense.payer) {
        balances[participant] += expense.amount - amountPerPerson;
      } else {
        balances[participant] -= amountPerPerson;
      }
    });
  });

  return (
    <div>
      <h2>Balance Summary</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
            {participant}: ₹{balances[participant].toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BalanceSummary;
