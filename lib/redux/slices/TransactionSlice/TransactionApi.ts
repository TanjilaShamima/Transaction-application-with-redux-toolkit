import axiosInstance from "@/src/networks/ApiService";
import { TransactionType } from "./TransactionSlice";

export const getAllTransaction = async () => {
  try {
    const response = await axiosInstance.get("/transaction");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTransaction = async (id: number, transaction: TransactionType) => {
  try {
    const response = await axiosInstance.put(`/transaction/${id}`, transaction);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNewTransaction = async (transaction: TransactionType) => {
  try {
    const response = await axiosInstance.post("/transaction", transaction);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeTransaction = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/transaction/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
