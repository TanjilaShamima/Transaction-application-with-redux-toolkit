/* Instruments */
import { counterSlice } from "./slices";
import { TransactionSlice } from "./slices/TransactionSlice/TransactionSlice";

export const reducer = {
  counter: counterSlice.reducer,
  transaction: TransactionSlice.reducer
};
