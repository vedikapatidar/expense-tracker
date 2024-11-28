import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense History</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ₹{expense.amount} (Paid by {expense.payer})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
