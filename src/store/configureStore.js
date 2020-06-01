import { createStore, combineReducers } from 'redux'
import ExpensesReducers from '../reducers/expenses';
import FiltersReducers from "../reducers/filters";


export default () => {
    const store = createStore(
        combineReducers({
            expenses: ExpensesReducers,
            filters: FiltersReducers
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};