import React from 'react';
import { configure } from '@storybook/react';
const req = require.context('../src', true, /.story.(ts|tsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
