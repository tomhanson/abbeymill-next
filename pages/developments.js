// @flow strict
import * as React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../components/Layout';

type Props = {};

const styles = {
  backgroundImage:
    "url('https://abbeymillhomes.co.uk/wp-content/uploads/2018/05/Kethero-Close-Drone-3-WEB2.jpg')",
  height: '100vh',
};

class Developments extends React.Component<Props> {
  test() {
    console.log(this);
  }
  render() {
    return (
      <Layout>
        <div style={styles} />
        <div style={styles} />
      </Layout>
    );
  }
}

type PropertyProps = {
  title: string,
  slug: string,
  property_description: string,
};
type GraphProps = {
  properties: [PropertyProps],
};

const PROP_QUERY: string = gql`
  # 2
  query getProps {
    properties(results: ${1}) {
      title
      slug
      property_description
    }
  }
`;

export default graphql((PROP_QUERY: string), {
  name: 'properties',
})(Developments);
