import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Sort from './Sort';

import Order from '../../models/enum/Order';

Enzyme.configure({ adapter: new Adapter() });

const base = {
  order: Order.asc,
};

describe('Sort', () => {
  it('renders correctly', () => {
    const props = Object.assign({}, base);
    const tree = Enzyme.shallow(<Sort {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
