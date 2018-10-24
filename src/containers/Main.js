import React from 'react';
import { hot } from 'react-hot-loader';

import MeasureConverter from './MeasureConverter/MeasureConverter';
import LoadableContactForm from './ContactForm/LoadableContactForm';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactUs: false
    };
    this.toggleContactUs = this.toggleContactUs.bind(this);
  }

  toggleContactUs() {
    this.setState(prevState => ({ contactUs: !prevState.contactUs }));
  }

  render() {
    return (
      <div>
        {this.state.contactUs ? (
          <LoadableContactForm toggleContactUs={this.toggleContactUs} />
        ) : (
          <MeasureConverter toggleContactUs={this.toggleContactUs} />
        )}
      </div>
    );
  }
}

export default hot(module)(Main);
