import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

Enzyme.configure({ adapter: new Adapter() });

const value = 'value';

const base = {
  value,
};

const id = 'react-datatable-input';

describe('Input', () => {
  it('handleInput', () => {
    const handleInput = jest.fn();
    const props = Object.assign({}, base, { handleInput });
    const content = Enzyme.mount(<Input {...props} />);

    const target = content.find(`input[data-test="${id}"]`);
    expect(target.get(0).props.value).toBe(value);

    target.simulate('change', { target: { value: id } });
    expect(handleInput).toBeCalled();
  });

  it('renders correctly', () => {
    const handleInput = jest.fn();
    const props = Object.assign({}, base, { handleInput });
    const tree = Enzyme.shallow(<Input {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
