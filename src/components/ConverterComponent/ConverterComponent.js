import React from 'react';
import { Col, Row, Table } from 'reactstrap';
import Mass from '../Mass/Mass';
import Volume from '../Volume/Volume';
import Temperature from '../Temperature/Temperature';
import Length from '../Length/Length';

const ConverterComponent = ({
  massProps,
  volumeProps,
  temperatureProps,
  lengthProps
}) => (
  <Row className="main animated fadeIn">
    <Col xs="12" sm={{ size: 4, offset: 4 }}>
      <h1 className="main--title">Cooking Measure Converter</h1>
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
          <Volume volumeProps={volumeProps} />
          <Length lengthProps={lengthProps} />
          <Temperature temperatureProps={temperatureProps} />
        </tbody>
      </Table>
    </Col>
  </Row>
);

export default ConverterComponent;

//   <Temperature temperatureProps={temperatureProps} />
