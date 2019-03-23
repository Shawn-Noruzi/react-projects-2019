import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'Name',
        description: 'January rent',
        note: 'Final payment for address',
        amount: 54500, //penny 
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
    }

};