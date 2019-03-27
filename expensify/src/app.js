import React from "react";
import AppRouter from "./routers/AppRouter";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

//add expense -> water bill
console.log("add water bill");
store.dispatch(addExpense({ description: "water bill", amount: 4500}));

//add expense -> gas bill
console.log("add gass bill");
store.dispatch(addExpense({ description: "gas bill" , amount: 4500, createdAt: 1000}));

console.log("add rent bill");
store.dispatch(addExpense({ description: "rent" , amount: 109500}));
//setTextFilter -> bill  (2i tems ) -> water (1 item)

// console.log("text filter for bill");
// store.dispatch(setTextFilter("bill"));

// console.log("text filter for water");
// store.dispatch(setTextFilter("water"));

//getVisibleExpenses -> print visibles ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
