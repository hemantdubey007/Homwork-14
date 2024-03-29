
import React, { useContext } from 'react'
import BudgetContext from './BudgetContext'
import './BudgetDetails.css'

const BudgetDetails = () => {

    const {totalBudget,totalSpend} = useContext(BudgetContext)
    console.log(totalBudget,totalSpend)
  return (
    <div id='budget_container'>
        <div className='budget-1'>
            <p>Budget: Rs.{totalBudget}</p>
        </div>
        <div className='budget-2'>
            <p>Remaining: Rs.{totalBudget - totalSpend}</p>
        </div>
        <div className='budget-3'>
            <p>Spant so far:{totalSpend}</p>
        </div>
    </div>
  )
}

export default BudgetDetails
