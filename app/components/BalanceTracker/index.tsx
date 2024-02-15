import React from "react";
import CurrentBalance from "./CurrentBalance/CurrentBalance";
import AddTransaction from "./AddTransaction/AddTransaction";
import MonthlyTransaction from "./MonthlyTransaction/MonthlyTransaction";

const BalanceTracker = () => {
  return (
    <div className="main">
      <div className="container">
        <CurrentBalance />

        <AddTransaction />

        <p className="second_heading">Your Transactions:</p>

        <MonthlyTransaction />
      </div>
    </div>
  );
};

export default BalanceTracker;
