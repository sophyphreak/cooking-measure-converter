import React from 'react';
import { Link } from 'gatsby';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const ContactPage = () => (
  <Row className="main contactForm animated fadeIn">
  <Col xs="12" sm={{ size: 4, offset: 4 }}>
      <Form>
        <FormGroup>
          <Label>your email address:</Label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label>your subject:</Label>
          <Input type="text" name="subject" />
        </FormGroup>
        <FormGroup>
          <Label>what you want to say:</Label>
          <Input type="textarea" name="message" />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
        <br />
        <br />
        <Link to="/">
          <Button className="align-center" color="link">
            return to cooking measure converter
          </Button>
        </Link>
      </Form>
  </Col>
</Row>
)

export default ContactPage;