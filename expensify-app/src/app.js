import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        this is from my d-board component
        </div>
);

const AddExpensePage = () => (
    <div>
        this is from my Add expense component
        </div>
);

//edit
const EditExpensePage = () => (
    <div>
        this is the edit page
    </div>
)
//help
const HelpPage = () => (
    <div>
    help page
    </div>
)
const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>


    </BrowserRouter>
    );

ReactDOM.render(routes, document.getElementById("app"));
