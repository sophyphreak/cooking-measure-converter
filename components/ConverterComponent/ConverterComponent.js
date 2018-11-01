import { Button, Col, Row, Table } from 'reactstrap'
import Link from 'next/link'

import Mass from '../Mass/Mass'
import Volume from '../Volume/Volume'
import Temperature from '../Temperature/Temperature'
import Length from '../Length/Length'

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
      <br />
      <br />
      <Link href="/contact">
        <Button className="align-center" color="link" size="sm">
          Contact us
        </Button>
      </Link>
    </Col>
  </Row>
)

export default ConverterComponent
