import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PageTitle from '../components/PageTitle';

storiesOf('PageTitle', module)
  .add('with title A', () => (
    <PageTitle>PageTitle A</PageTitle>
  ))
  .add('with title B', () => (
    <PageTitle>PageTitle B</PageTitle>
  ));
