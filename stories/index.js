import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import PageTitle from '../components/PageTitle';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('PageTitle', module)
  .add('with title A', () => (
    <PageTitle>PageTitle A</PageTitle>
  ))
  .add('with title B', () => (
    <PageTitle>PageTitle B</PageTitle>
  ));
