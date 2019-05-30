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
    <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 4, offset: 4 }}>
      <Table>
        <thead>
          <tr align="center">
            <th />
            <th>metric</th>
            <th>usa standard</th>
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
      <br />
      <br />
    </Col>
  </Row>
);

export default ConverterComponent;
