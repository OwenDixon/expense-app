import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary.jsx";

test('Should correctly render ExpensesSummary with 1 expense', () => {

    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={345} />)
    expect(wrapper).toMatchSnapshot();

});

test('Should correctly render ExpensesSummary with multiple expense', () => {
   
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expenseTotal={343325} />)
    expect(wrapper).toMatchSnapshot();

});