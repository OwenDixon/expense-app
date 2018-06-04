import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList.jsx';
import expenses from '../fixtures/expenses.jsx';

test('should render expense list from expenses', () => {

    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render <p>No expenses</p> when expenses empty', () => {

    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})
