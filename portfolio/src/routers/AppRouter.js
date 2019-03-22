import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./../components/Header";
import HomePage from "./../components/HomePage";
import PortfolioItemPage from "./../components/PortfolioitemPage";
import PortfolioPage from './../components/PortfolioPage';
import ContactPage from "./../components/ContactPage";
import NotFoundPage from "./../components/NotFound";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contacts" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;