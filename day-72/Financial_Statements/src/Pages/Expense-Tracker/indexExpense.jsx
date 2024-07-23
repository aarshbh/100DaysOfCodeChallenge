import React from "react";
import  useAddTransactions from "../../Hooks/useTransactions";
import useGetTransactions from "../../Hooks/useGetTransactions"
import useGetUserInfo  from "../../Hooks/useGetUserInfo"


const indexExpense = () => {
  const {addTransaction} = useAddTransactions();
  const {transactions} = useGetTransactions();
  const {name,profilePhoto} = useGetUserInfo();
  
  
  
  const onSubmit = (e)=>{
    e.preventDefault()
    addTransaction({
      description: "Haircut",
      transactionAmount: 22,
      transactionType: "expense",
    })
  }
  return (
    <>
    <div className="expense-tracker">
      <div className="container">
        <h1> {name}'s Expense Tracker</h1>
        <div className="balance">
          <h3> Your balance </h3>
          <h2> $0.00 </h2>
        </div>
        <div className="summary">
          <div className="income">
            <h4> Income </h4>
            <p> $0.00 </p>
          </div>
          <div className="expenses">
            <h4> Expenses </h4>
            <p> $0.00 </p>
          </div>
        </div>
        <form className="transactions" onSubmit={onSubmit}>
          <input type="text" placeholder="Description" required  />
          <input type="number" placeholder="Amount" required  />
          <input type="radio" id="expense" value="expense" />
          <label htmlFor="expense"> Expenses </label>
          <input type="radio" id="income" value="income" />
          <label htmlFor="income"> Income </label>

          <button type="sumbit"> Add transactions </button>
        </form>

      </div>
      
      {profilePhoto && <div><img src={profilePhoto}/>
      <botton>SIgn Out</botton></div>}

    </div>

    <div className="transactions">
<h3> Transactions </h3>
<ul>
  {transactions.map((transaction) => {
    const { description, transactionAmount, transactionType } = transaction;
    return (
      <li key={description}>
        <h4>{description}</h4>
        <p>${transactionAmount} <label>{transactionType}</label></p>
      </li>
    );
  })}
</ul>

    </div>
    </>
  );
};

export default indexExpense;
