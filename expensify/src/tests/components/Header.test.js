//react-test-renderer
import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme';

import Header from '../../components/Header';

test('should render Header correctly', () => {

const wrapper = shallow(<Header />);
expect(toJSON(wrapper)).toMatchSnapshot();

//  const renderer = new ReactShallowRenderer();
//  renderer.render(<Header />);
//  expect(renderer.getRenderOutput()).toMatchSnapshot();
});