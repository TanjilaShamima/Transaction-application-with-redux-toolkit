import axiosInstance from "@/src/networks/ApiService";
import { TransactionType } from "./TransactionSlice";

export const getAllTransaction = async () => {
  try {
    const response = await axiosInstance.get("/transactions");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTransaction = async (id: number, transaction: TransactionType) => {
  try {
    const response = await axiosInstance.put(`/transactions/${id}`, transaction);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNewTransaction = async (transaction: TransactionType) => {
    console.log("api", transaction);
  try {
    const response = await axiosInstance.post("/transactions", transaction);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeTransaction = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/transactions/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
