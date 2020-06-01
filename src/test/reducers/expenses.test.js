import expensesReducers from '../../reducers/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should set the default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});


test('Should remove expense by ID', () => {
    const id = expenses[1].id
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should nto remove expendr if is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '=1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should Add Expense', () => {
    const expense = {
        id: '4',
        description: 'Laptop',
        note: '',
        amount: 195000,
        createdAt: 8000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should Edit Expense', () => {
    const amount = 122000;
    const action ={
        type : 'EDIT_EXPENSE',
        id: expenses[1].id,
        update :{
            amount
        }
    }
    const state = expensesReducers(expenses,action);
    expect(state[1].amount).toBe(amount);
});


test('Should Not Edit Expense if id is not found', () => {
    const amount = 122000;
    const action ={
        type : 'EDIT_EXPENSE',
        id: -1,
        update :{
            amount
        }
    }
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});

