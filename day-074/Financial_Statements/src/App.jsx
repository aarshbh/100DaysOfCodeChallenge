import { useState } from 'react'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import {Auth} from "./Pages/Auth/indexAuth";
import {ExpenseTracker} from "./Pages/Expense-Tracker/indexExpense";
function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />} />
          <Route path='/expense-tracker' exact element={<ExpenseTracker />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
