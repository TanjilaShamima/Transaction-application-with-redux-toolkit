import {
  addNewTransaction,
  deleteTransaction,
  updateExistingTransaction,
} from "./TransactionThunk";
//type

import { createSlice } from "@reduxjs/toolkit";
import { fetchTransaction } from "./TransactionThunk";

export type TransactionType = {
  id: number|null;
  name: string;
  type: string;
  amount: number;
};

type StateType = {
  transactions: TransactionType[];
  isLoading: boolean;
  error: string;
  isError: boolean;
};

const initialState: StateType = {
  transactions: [],
  isLoading: false,
  error: "",
  isError: false,
};

export const TransactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "";
        state.transactions = [];
      })
      .addCase(addNewTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addNewTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions.push(action.payload);
      })
      .addCase(addNewTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "";
        state.transactions = [];
      })
      .addCase(updateExistingTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateExistingTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions[
          state.transactions.findIndex(
            (transaction) => (transaction.id = action.payload.id)
          )
        ] = action.payload.transaction;
      })
      .addCase(updateExistingTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "";
        state.transactions = [];
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = state.transactions.filter(
          (t) => t.id !== action.payload
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "";
        state.transactions = [];
      });
  },
});
