import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../Hooks/useTransactions";
import { useGetTransactions } from "../../Hooks/useGetTransactions";
import { useGetUserInfo } from "../../Hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";

import { auth } from "../../Configs/ConfigsOfFirebase";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
 
  const { balance, income, expenses } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });

    setDescription("");
    setTransactionAmount("");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold text-purple-600">Penny&Dian</h1>
          <p className="text-lg text-purple-400">manage your finance</p>
        </div>
        <div className="container max-w-lg bg-white p-8 rounded-lg shadow-lg mt-8 relative">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">{name}'s Expense Tracker</h1>
          <div className="balance mb-6">
            <h3 className="text-gray-600">Your Balance</h3>
            {balance >= 0 ? (
              <h2 className="text-2xl text-green-500">${balance}</h2>
            ) : (
              <h2 className="text-2xl text-red-500">-${balance * -1}</h2>
            )}
          </div>
          <div className="summary flex justify-between mb-6">
            <div className="income text-center">
              <h4 className="text-gray-600">Income</h4>
              <p className="text-green-500">${income}</p>
            </div>
            <div className="expenses text-center">
              <h4 className="text-gray-600">Expenses</h4>
              <p className="text-red-500">${expenses}</p>
            </div>
          </div>
          <form className="add-transaction mb-6" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mb-4 p-2 border rounded-lg"
            />
            <input
              type="number"
              placeholder="Amount"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
              className="w-full mb-4 p-2 border rounded-lg"
            />
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="expense"
                value="expense"
                checked={transactionType === "expense"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="expense" className="mr-4">Expense</label>
              <input
                type="radio"
                id="income"
                value="income"
                checked={transactionType === "income"}
                onChange={(e) => setTransactionType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="income">Income</label>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600">
              Add Transaction
            </button>
          </form>
          {profilePhoto && (
            <div className="flex items-center justify-between mt-4">
              <img className="profile-photo w-12 h-12 rounded-full" src={profilePhoto} alt="Profile" />
              <button
                className="sign-out-button bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
                onClick={signUserOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
        <div className="transactions container max-w-lg bg-white p-8 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Transactions</h3>
          <ul>
            {transactions.map((transaction, index) => {
              const { description, transactionAmount, transactionType } = transaction;
              return (
                <li key={index} className="flex justify-between items-center mb-4">
                  <h4 className="text-gray-800">{description}</h4>
                  <p className={`text-${transactionType === "expense" ? "red" : "green"}-500`}>
                    ${transactionAmount} • <span className="capitalize">{transactionType}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
