import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
//SET_TEXT_FILTER

const setTextFilter = ( text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_DATE
//SORT_AMOUNT
//SET_START_DATE
//SET_END_DATE

//EXPENSES REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//FILTERS REDUCER

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
        return {
            ...state.expenses,
            text : action.text
        }
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

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "House", amount: 300 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());
const demoState = {
  expenses: [
    {
      id: "Name",
      description: "January rent",
      note: "Final payment for address",
      amount: 54500, //penny
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "date", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
