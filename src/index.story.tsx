import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ReactDataTables from './index';

import { keies, contents } from '../test/data';

const base = {
  keies,
  contents,
};

storiesOf('ReactDataTables', module)
  .add('nomal', () => {
    const props = Object.assign({}, base);
    return <ReactDataTables {...props} />;
  })
  .add('label', () => {
    const props = Object.assign({}, base, { label: 'search:' });
    return <ReactDataTables {...props} />;
  });
