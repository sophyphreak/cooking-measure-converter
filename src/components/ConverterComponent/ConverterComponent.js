import React from 'react';
import { Col, Row, Table } from 'reactstrap';
import Mass from '../Mass/Mass';

const ConverterComponent = ({ massProps }) => (
  <Row className="main animated fadeIn">
    <Col xs="12" sm={{ size: 4, offset: 4 }}>
      <h1 className="main--title">React Cooking Measure Converter</h1>
      <Table>
        <thead>
          <tr align="center">
            <th />
            <th>Metric</th>
            <th>Imperial</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <Mass massProps={massProps} />
        </tbody>
      </Table>
    </Col>
  </Row>
);

export default ConverterComponent;
