 import moment from 'moment';


const FiltersReducersDefualtState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
const FiltersReducers = (state = FiltersReducersDefualtState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};
export default FiltersReducers;