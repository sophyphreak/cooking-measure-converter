import React from 'react';
import axios from 'axios';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

// TODO
//
// - Form should wait until 200 status sent back
// - Add basic form validation
// - Refactor container/component style, etc.
// - Add reCAPTCHA

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: '',
      messageSent: false
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onSubjectChange(e) {
    const subject = e.target.value;
    this.setState(() => ({ subject }));
  }

  onMessageChange(e) {
    const message = e.target.value;
    this.setState(() => ({ message }));
  }

  onSubmit() {
    const { email, subject, message } = this.state;
    axios
      .post(
        'https://cors-anywhere.herokuapp.com/https://mysterious-bastion-38980.herokuapp.com/api/contact-us',
        {
          email,
          subject,
          message
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    const messageSent = true;
    this.setState(() => ({ messageSent }));
  }

  render() {
    return (
      <Row className="main contactForm animated fadeIn">
        <Col xs="12" sm={{ size: 4, offset: 4 }}>
          {this.state.messageSent ? (
            <div>
              <h3>Message sent! We'll get back to you soon. We promise</h3>
              <div>
                <Button
                  className="align-center"
                  color="link"
                  onClick={this.props.toggleContactUs}
                >
                  Return to Cooking Measure Converter
                </Button>
              </div>
            </div>
          ) : (
            <Form>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" onChange={this.onEmailChange} />
              </FormGroup>
              <FormGroup>
                <Label>Subject</Label>
                <Input onChange={this.onSubjectChange} />
              </FormGroup>
              <FormGroup>
                <Label>Message Body</Label>
                <Input type="textarea" onChange={this.onMessageChange} />
              </FormGroup>
              <Button color="primary" onClick={this.onSubmit}>
                Submit
              </Button>
              <br />
              <br />
              <div>
                <Button
                  className="align-center"
                  color="link"
                  onClick={this.props.toggleContactUs}
                >
                  Return to Cooking Measure Converter
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    );
  }
}
