import { createStore, combineReducers } from 'redux';


//ADD
//EDIT
//SET_TEXT_FILTER
//SORT_DATE
//SORT_AMOUNT
//SET_START_DATE
//SET_END_DATE

//EXPENSES REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
 switch ( action.type ){
     default: 
        return state;
 }
};

//FILTERS REDUCER

const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action) => {
 switch (action.type){
     default:
        return state;
 }
};

//STORE CREATION

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

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