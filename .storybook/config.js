import { configure } from '@storybook/react';

const requires = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  requires.keys().forEach(filename => requires(filename));
}

configure(loadStories, module);
