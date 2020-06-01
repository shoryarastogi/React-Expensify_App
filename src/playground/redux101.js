import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

// const addExpense = (
//     {
//         description = "",
//         note = "",
//         amount = 0,
//         createdAt = 0
//     } = {}) => ({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuid(),
//             description,
//             note,
//             amount,
//             createdAt,

//         }
//     });
// const removeExpense = ({ id } = {}) => ({
//     type: 'REMOVE_EXPENSE',
//     id
// });

// const editExpense = (id, update = {}) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     update
// });

// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT',
//     text
// });

// const sortByAmount = () => ({
//     type: 'SORTBY_AMOUNT',
// });

// const sortByDate = () => ({
//     type: 'SORTBY_DATE',
// });

// const setStartDate = (startDate = undefined) => ({
//     type: 'START_DATE',
//     startDate
// });

// const setEndDate = (endDate = undefined) => ({
//     type: 'END_DATE',
//     endDate
// });


// const ExpensesReducersDefualtState = []
// const ExpensesReducers = (state = ExpensesReducersDefualtState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [
//                 ...state,
//                 action.expense
//             ];
//         case 'REMOVE_EXPENSE':
//             return state.filter((expense) => {
//                 return action.id !== expense.id;
//             });
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if (action.id === expense.id) {
//                     return {
//                         ...state,
//                         ...action.update
//                     };
//                 } else {
//                     return expense;
//                 }
//             });
//         default:
//             return state;
//     }
// };

// const FiltersReducersDefualtState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// };
// const FiltersReducers = (state = FiltersReducersDefualtState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT':
//             return {
//                 ...state,
//                 text: action.text
//             }
//         case 'SORTBY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             }
//         case 'SORTBY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             }
//         case 'START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             }
//         case 'END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             }
//         default:
//             return state;
//     }
// };

// const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//         return textMatch && startDateMatch && endDateMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt - b.createdAt;
//             // return a.createdAt < b.createdAt ? 1 : -1;
//         }
//         if (sortBy === 'amount') {
//             return a.amount - b.amount;
//             // return a.amount < b.amount ? 1 : -1;
//         }
//     })
// };

// const store = createStore(
//     combineReducers({
//         expenses: ExpensesReducers,
//         filters: FiltersReducers
//     })
// );

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpense);
});
const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 250, createdAt: 3000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Electricity Bill', amount: 3000, createdAt: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: 1500 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());


// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1253));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(245));


// const demoState = {
//     expenses: [{
//         id: 'fgeo',
//         description: 'January Post',
//         note: 'This is the final payment for that address',
//         amount: 1000,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined,
//     }
// };


