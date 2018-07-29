// @flow strict
import React from 'react';
// import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
// https://www.abbeymillhomes.co.uk/wp-json/wp/v2/portfolio

type Props = {||};

type InitProps = {
  pathname: Object,
};

class portfolio extends React.Component<Props> {
  static getInitialProps = async ({ pathname }: InitProps) => {
    console.log(pathname);
    // const res = await fetch(`//abbeymillhomes.co.uk/wp-json/wp/v2/pages?slug=${pathname}`);
    // const data = await res.json();
    // console.log(`Show data fetched. Count: ${data.length}`);
    console.log(`Show data fetched. Coun`);

    // return {
    //   data,
    // };
  };
  render() {
    console.log(this.props);
    return <Layout>portfolio</Layout>;
  }
}

export default portfolio;

// title

// from portfolio post type

// portfolio_image
// portfolio_type
// portfolio_page_link
