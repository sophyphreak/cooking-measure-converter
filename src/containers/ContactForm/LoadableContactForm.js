import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = Loadable({
  loader: () => import('./ContactForm'),
  loading: Loading
});

export default class LoadableContactForm extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
