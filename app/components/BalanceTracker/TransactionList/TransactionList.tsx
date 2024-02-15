"use client";
import { useDispatch, useSelector } from "@/lib/redux";
import React, { useEffect } from "react";
import SingleTransaction from "./SingleTransaction";
import { fetchTransaction } from "@/lib/redux/slices/TransactionSlice/TransactionThunk";

const TransactionList = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch]);

  return (
    <div className="conatiner_of_list_of_transactions">
      <ul>
        {transactions?.map((transaction) => (
          <SingleTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
