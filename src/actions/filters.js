
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

export const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORTBY_DATE'
});

export const setStartDate = (startDate = undefined) => ({
    type: 'START_DATE',
    startDate
});

export const setEndDate = (endDate = undefined) => ({
    type: 'END_DATE',
    endDate
});
