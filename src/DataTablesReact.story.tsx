import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DataTablesReact from './DataTablesReact';

/* eslint import/no-named-default: 0 */
import { default as DataTablesReactModule } from '../dist/datatables-react.js';

import { keies, contents } from '../test/data';

const base = {
  keies,
  contents,
};

storiesOf('ReactDataTables', module)
  .addDecorator(withInfo({ inline: true }))
  .add('nomal production build', () => {
    const props = Object.assign({}, base);
    return <DataTablesReactModule {...props} />;
  })
  .add('label productoin build', () => {
    const props = Object.assign({}, base, { label: 'search:' });
    return <DataTablesReactModule {...props} />;
  })
  .add('nomal', () => {
    const props = Object.assign({}, base);
    return <DataTablesReact {...props} />;
  })
  .add('label', () => {
    const props = Object.assign({}, base, { label: 'search:' });
    return <DataTablesReact {...props} />;
  });
