import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Input from './Input';

const value = 'value';
const id = 'react-datatable-input';
const base = {
  value,
};

describe('Input', () => {
  afterEach(() => {
    cleanup();
  });

  it('handleInput called input change', () => {
    const handleInput = jest.fn();
    const props = Object.assign({}, base, { handleInput });
    const { getByTestId } = render(<Input {...props} />);

    const input = getByTestId(id) as HTMLInputElement;
    expect(input.value).toBe(value);

    fireEvent.change(input, { target: { value: id } });
    expect(handleInput).toBeCalled();
    expect(handleInput.mock.calls[0][0]).toBe(id);
  });

  it('renders correctly', () => {
    const handleInput = jest.fn();
    const props = Object.assign({}, base, { handleInput });
    const { asFragment } = render(<Input {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
