import { useDispatch, useSelector } from "@/lib/redux";
import { TransactionType } from "@/lib/redux/slices/TransactionSlice/TransactionSlice";
import {
  deleteTransaction,
  fetchTransaction,
} from "@/lib/redux/slices/TransactionSlice/TransactionThunk";
import React, { useEffect } from "react";

interface Props {
  transaction: TransactionType;
}

const SingleTransaction = ({ transaction }: Props) => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);

  const handleEdit = () => {};
  const handleDelete = () => {
    dispatch(deleteTransaction(Number(transaction.id)));
  };

  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch, transactions]);

  return (
    <li className="transaction income">
      <p>{transaction.name}</p>
      <div className="right">
        <p>৳ {transaction.amount}</p>
        <button className="link" onClick={handleEdit}>
          <img className="icon" src="./images/edit.svg" />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src="./images/delete.svg" />
        </button>
      </div>
    </li>
  );
};

export default SingleTransaction;
