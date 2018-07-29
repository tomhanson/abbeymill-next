import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';

type Props = {
  data: Object,
};

class About extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      smiley: true,
    };
  }
  static getInitialProps = async () => {
    const res = await fetch('//abbeymillhomes.co.uk/wp-json/wp/v2/pages?slug=about-us');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      data,
    };
  };
  toggleSmiley = () => {
    this.setState({
      smiley: !this.state.smiley,
    });
  };
  render() {
    const { acf } = this.props.data[0];
    console.log('about', acf);
    return (
      <Layout>
        <Link href={{ pathname: '/property', query: { name: 'test' } }} as="property/test">
          <a>a property</a>
        </Link>
        <button onClick={this.toggleSmiley}>
          click to make me {this.state.smiley ? 'sad' : 'happy'}
        </button>

        <p>About page {this.state.smiley ? ':D' : ':('}</p>
      </Layout>
    );
  }
}

export default About;

// title
// content
// main_photo;
// img-property-tile-sq if not
// about_left_content
