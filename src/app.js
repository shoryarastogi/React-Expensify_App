import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 250, createdAt: 3000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Electricity Bill', amount: 3000, createdAt: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: 1500 }));

// store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// }, 3000);

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpense); 

const jsx =(
    <Provider store ={store}>
        <AppRouter/>
    </Provider>
);  
ReactDOM.render(jsx, document.getElementById('app'));


