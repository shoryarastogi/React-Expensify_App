import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from "./ExpensesSummary";
const ExpenseDashBoardPage = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
export default ExpenseDashBoardPage;