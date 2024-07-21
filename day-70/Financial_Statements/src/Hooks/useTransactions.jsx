import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Configs/ConfigsOfFirebase";
import { useGetUserInfo } from "./useGetUserInfo";
const useAddTransactions = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();
  const addtransaction = async ({
    description,
    transactionAmount,
    transactiontype,
  }) => {
    await addDoc(transactionCollectionRef),
      {
        userID,
        description,
        transactionAmount,
        transactionType,
        createdAt: serverTimestamp(),
      };
  };

  return {};
};

export default useAddTransactions;
