import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm  from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render expenseform with no data ', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});



test('should render expenseform with expense data ', () => {
    const wrapper = shallow(<ExpenseForm  expense = {expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});