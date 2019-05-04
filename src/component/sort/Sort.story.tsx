import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Sort from './Sort';

import Order from '../../models/enum/Order';

const base = {};

storiesOf('Sort', module)
  .add('asc', () => {
    const props = Object.assign({}, base, { order: Order.asc });
    return <Sort {...props} />;
  })
  .add('desc', () => {
    const props = Object.assign({}, base, { order: Order.desc });
    return <Sort {...props} />;
  });
