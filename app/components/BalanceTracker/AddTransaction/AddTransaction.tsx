"use client";

import { useDispatch, useSelector } from "@/lib/redux";
import { TransactionType } from "@/lib/redux/slices/TransactionSlice/TransactionSlice";
import { addNewTransaction } from "@/lib/redux/slices/TransactionSlice/TransactionThunk";
import React, { useState } from "react";

const AddTransaction = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);
  const [transaction, setTransaction] = useState<TransactionType>({
    name: "",
    type: "income",
    amount: 0,
    id: null,
  });

  const handleSubmit = () => {
    dispatch(
      addNewTransaction({ ...transaction, id: transactions.length + 1 })
    );
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="My Salary"
          value={transaction?.name}
          onChange={(e) =>
            setTransaction((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
      </div>
      <div className="form-group radio">
        <label>Type</label>
        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="type"
            checked={transaction?.type === "income"}
            onChange={(e) =>
              setTransaction((prev) => ({
                ...prev,
                type: e.target.value,
              }))
            }
          />
          <label>Income</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="type"
            placeholder="Expense"
            checked={transaction?.type === "expense"}
            onChange={(e) =>
              setTransaction((prev) => ({
                ...prev,
                type: e.target.value,
              }))
            }
          />
          <label>Expense</label>
        </div>
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          placeholder="300"
          name="amount"
          value={transaction?.amount}
          onChange={(e) =>
            setTransaction((prev) => ({
              ...prev,
              amount: Number(e.target.value),
            }))
          }
        />
      </div>
      <button className="btn" onClick={handleSubmit}>
        Add Transaction
      </button>
      <button className="btn cancel_edit">Cancel Edit</button>
      CurrentBalance
    </div>
  );
};

export default AddTransaction;
