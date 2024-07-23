import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Configs/ConfigsOfFirebase";
import useGetUserInfo from "./useGetUserInfo";

const useAddTransactions = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  const addTransaction = async ({ description, transactionAmount, transactionType }) => {
    if (!userID) {
      console.error("userID is undefined. Cannot add transaction.");
      return;
    }

    console.log("Adding transaction with userID:", userID);

    try {
      await addDoc(transactionCollectionRef, {
        userID,
        description,
        transactionAmount,
        transactionType,
        createdAt: serverTimestamp(),
      });
      console.log("Transaction added successfully");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return { addTransaction };
};

export default useAddTransactions;
