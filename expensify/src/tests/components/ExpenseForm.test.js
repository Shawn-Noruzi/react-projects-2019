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

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm  />);
    expect(wrapper).toMatchSnapshot();
    //prevents undefined behavior being passed into event handler
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
});