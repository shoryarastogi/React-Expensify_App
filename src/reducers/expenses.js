
const ExpensesReducersDefualtState = []
const ExpensesReducers = (state = ExpensesReducersDefualtState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                return action.id !== expense.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (action.id === expense.id) {
                    return {
                        ...state,
                        ...action.update
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
export default ExpensesReducers;