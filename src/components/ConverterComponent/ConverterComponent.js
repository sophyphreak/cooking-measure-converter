import React from 'react';
import {
  Col,
  Row,
  Table,
} from 'reactstrap';
import Mass from '../Mass/Mass';

const ConverterComponent = ({
  imperialMass,
  onImperialMassChange,
  metricMass,
  onMetricMassChange
}) => (
  <Row className="main animated fadeIn">
  <Col xs="12" sm={{ size: 4, offset: 4 }}>
  <h1 className="main--title">React Cooking Measure Converter</h1>
  <Table>
    <thead>
      <tr align="center">
        <th></th>
        <th>Metric</th>
        <th>Imperial</th>
        <th></th>        
      </tr>
    </thead>
    <tbody>
      <Mass 
        imperialMass={imperialMass}
        onImperialMassChange={onImperialMassChange}
        metricMass={metricMass}
        onMetricMassChange={onMetricMassChange}
      />
    </tbody>
  </Table>
  </Col>
  </Row>
);

export default ConverterComponent;