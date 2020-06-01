import filtersReducers from '../../reducers/filters';
import moment, { months } from 'moment';
test('Should Setup default filter value', () => {
    const state = filtersReducers(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should sort by to Amount', () => {
    const state = filtersReducers(undefined, { type: 'SORTBY_AMOUNT' });
    expect(state.sortBy).toEqual('amount')
});

test('Should set sort by to date', () => {
    const currState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORTBY_DATE' }
    const state = filtersReducers(currState, action)
    expect(state.sortBy).toEqual('date')
});

test('Should set text Filter', () => {
    const text = "Rent"
    const action = {
        type: 'SET_TEXT',
        text
    }
    const state = filtersReducers(undefined,action);
    expect(state.text).toBe(text);
});

test('Should set Start Date Filter', () => {
    const  startDate= moment();
    const action = {
        type: 'START_DATE',
        startDate
    }
    const state = filtersReducers(undefined,action);
    expect(state.startDate).toEqual(startDate);
});

test('Should set End Date Filter', () => {
    const  endDate= moment();
    const action = {
        type: 'END_DATE',
        endDate
    }
    const state = filtersReducers(undefined,action);
    expect(state.endDate).toEqual(endDate);
});

