import React from 'react';

import MeasureConverter from './MeasureConverter/MeasureConverter';
import ContactForm from './ContactForm/ContactForm';

export default class Main extends React.Component {
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
          <ContactForm toggleContactUs={this.toggleContactUs} />
        ) : (
          <MeasureConverter toggleContactUs={this.toggleContactUs} />
        )}
      </div>
    );
  }
}
