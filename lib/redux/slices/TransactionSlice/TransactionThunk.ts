import { createNewTransaction, getAllTransaction, removeTransaction, updateTransaction } from "./TransactionApi";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { TransactionType } from "./TransactionSlice";

export const fetchTransaction = createAppAsyncThunk(
  "transaction/fetchTransaction",
  async () => {
    const data = await getAllTransaction();
    return data;
  }
);

export const addNewTransaction = createAppAsyncThunk(
  "transaction/addNewTransaction",
  async (transaction: TransactionType) => {
    console.log('transaction', transaction);
    const data = await createNewTransaction(transaction);
    return data;
  }
);

export const updateExistingTransaction = createAppAsyncThunk(
  "transaction/updateTransaction",
  async ({id, transaction}: any) => {
    const data = await updateTransaction(id, transaction);
    return data;
  }
);

export const deleteTransaction = createAppAsyncThunk("transaction/deleteTransaction", async (id: number) => {
  const data = await removeTransaction(id);
  return data;
});
