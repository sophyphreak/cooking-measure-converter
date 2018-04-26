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
  <Col xs="12" sm={{ size: 6, offset: 3 }}>
  <Table>
    <thead>
      <tr>
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