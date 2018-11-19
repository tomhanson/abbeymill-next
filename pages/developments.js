// @flow strict
import * as React from 'react';
import Layout from '../components/Layout';
import { PropertyQuery } from '../containers';

const DEFAULT_PROPERTIES = 10;

const OurProperties = () => (
  <Layout>
    <main>
      <PropertyQuery
        {...{
          results: DEFAULT_PROPERTIES,
          offset: 0,
          exclude: 4,
          filter: 'DEVELOPMENT',
        }}
      />
    </main>
  </Layout>
);

export default OurProperties;
