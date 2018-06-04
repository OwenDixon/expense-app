import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage.jsx';

test('should render not found page correctly', () => {

    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})