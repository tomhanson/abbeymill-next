// @flow strict
import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

type Props = {||};

class Properties extends React.Component<Props> {
  static getInitialProps = async ({ pathname }) => {
    const res = await fetch(`//abbeymillhomes.co.uk/wp-json/wp/v2/pages?slug=${pathname}`);
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      data,
    };
  };
  render() {
    console.log(this.props.data);
    return <Layout>props</Layout>;
  }
}

export default Properties;
