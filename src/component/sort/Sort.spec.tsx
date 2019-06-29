import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import Sort from './Sort';

import Order from '../../models/enum/Order';

const base = {
  order: Order.asc,
};

describe('Sort', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
    const props = Object.assign({}, base);
    const { asFragment } = render(<Sort {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
