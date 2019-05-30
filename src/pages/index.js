import React from 'react';

import MeasureConverter from '../containers/MeasureConverter/MeasureConverter';
import Layout from '../components/layout';
import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MeasureConverter />
  </Layout>
);

export default IndexPage;
