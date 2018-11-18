// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Container, Row, Column, SearchForm } from '../';

import { FooterBorder } from './footer.styles';

const NAVIGATION_QUERY: string = gql`
  query navigation {
    footerOne: navigation(navLocation: FOOTER_NAV_ONE) {
      id
      title
      url
    }
    footerTwo: navigation(navLocation: FOOTER_NAV_TWO) {
      id
      title
      url
    }
  }
`;

const footer = () => (
  <div>
    <Query query={NAVIGATION_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { footerOne, footerTwo } = data;
        return (
          <footer className="footer footer--primary">
            <Container>
              <FooterBorder>
                <Row>
                  <Column xs={6} sm={4} md={3} lg={2}>
                    <ul>
                      {footerOne.map(item => (
                        <li key={item.id}>
                          <Link href={item.url}>
                            <a>{item.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Column>
                  <Column xs={6} sm={4} md={3} lg={2}>
                    <ul>
                      {footerTwo.map(item => (
                        <li key={item.id}>
                          <Link href={item.url}>
                            <a>{item.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Column>
                  <Column sm={4} md={5} mdOffset={2} lgOffset={3}>
                    <SearchForm />
                  </Column>
                </Row>
              </FooterBorder>
            </Container>
          </footer>
        );
      }}
    </Query>
  </div>
);

export default footer;
