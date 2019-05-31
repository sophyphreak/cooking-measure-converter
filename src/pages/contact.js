import React from 'react';
import { Link } from 'gatsby';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const ContactPage = () => (
  <Row className="main contactForm animated fadeIn">
  <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 4, offset: 4 }}>
  <br />
      <Form netlify>
        <FormGroup>
          <Label>your email address.</Label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label>the short version.</Label>
          <Input type="text" name="subject" />
        </FormGroup>
        <FormGroup>
          <Label>what you want to tell me.</Label>
          <Input type="textarea" name="message" />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
        </Form>
        <br />
        <Link to="/">
          <Button className="align-center" color="link">
            return to cooking measure converter
          </Button>
        </Link>
  </Col>
</Row>
)

export default ContactPage;