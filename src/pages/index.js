import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'reactstrap';

import MeasureConverter from '../containers/MeasureConverter/MeasureConverter';
import Layout from '../components/layout';
import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MeasureConverter />
    <Link to="/contact">
    <Button className="align-center" color="link">
      contact me
    </Button>
  </Link>
  </Layout>
);

export default IndexPage;
