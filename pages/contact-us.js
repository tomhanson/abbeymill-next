// @flow strict
import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

type Props = {||};

class contactUs extends React.Component<Props> {
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
    return <Layout>contact</Layout>;
  }
}

export default contactUs;

// title
// global_contact_number
// global_contact_email
// global_contact_address
