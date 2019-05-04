import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

const handleInput = (v: string) => {
  console.log(v);
};

const base = {
  handleInput,
  value: '',
};

storiesOf('Input', module).add('nomal', () => {
  const props = Object.assign({}, base);
  return <Input {...props} />;
});
