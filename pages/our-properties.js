// @flow strict
import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
import Layout from '../components/Layout';
import { Container, Column, Row, Section, Spacer, PropertyGrid } from '../components/index';

import { H1, H5 } from '../components/global/Global.styles';

const DEFAULT_PROPERTIES = 10;

type Props = {||};

type State = {|
  propertiesToFetch: number,
  offset: number,
  fetchedAll: boolean,
|};

const OUR_PROPERTIES_QUERY: string = gql`
  query ourProperties($results: Int!, $offset: Int!, $exclude: Int, $filter: FilterOptions) {
    pages(page: "our-properties") {
      ... on Properties {
        title
        content
      }
    }
    properties(results: $results, offset: $offset, exclude: $exclude, filter: $filter) {
      ...PropertyFields_Property
    }
  }
  ${PropertyGrid.fragments.property}
`;

class OurProperties extends React.Component<Props, State> {
  state = {
    propertiesToFetch: 10,
    offset: 10,
    fetchedAll: false,
  };
  updateOffset = () => {
    this.setState({
      offset: this.state.offset + 10,
    });
  };
  fetchedAll = () => {
    this.setState({
      fetchedAll: true,
    });
  };
  render() {
    const { propertiesToFetch } = this.state;
    return (
      <Layout>
        <main>
          <Query
            query={OUR_PROPERTIES_QUERY}
            variables={{
              results: DEFAULT_PROPERTIES,
              offset: 0,
              exclude: 4,
              filter: 'SOLD',
            }}
            fetchPolicy="cache-and-network"
          >
            {({ loading, error, data, fetchMore }) => {
              const { pages } = data;
              if (error) return `Error! ${error.message}`;

              const propertyData = data.properties || [];
              return (
                <React.Fragment>
                  <Section headerPadding>
                    <Container>
                      <Row>
                        <Spacer paddingTop={65} paddingBottom={65}>
                          <Column md={10} mdOffset={1} textCenter>
                            {pages && pages.title ? (
                              <React.Fragment>
                                <Spacer paddingBottom={20}>
                                  <H1 className="spacing-sm--btm-only">{pages.title}</H1>
                                </Spacer>
                                <H5 dangerouslySetInnerHTML={{ __html: pages.content }} />
                              </React.Fragment>
                            ) : (
                              'loading....'
                            )}
                          </Column>
                        </Spacer>
                      </Row>
                    </Container>
                  </Section>
                  <PropertyGrid
                    loading={loading}
                    fetchedAll={this.state.fetchedAll}
                    properties={propertyData}
                    onLoadMore={() => {
                      if (!this.state.fetchedAll) {
                        return fetchMore({
                          variables: {
                            results: propertiesToFetch,
                            offset: this.state.offset,
                            exclude: 3,
                            filter: 'SOLD',
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult.properties.length) {
                              this.fetchedAll();
                              return prev;
                            }
                            this.updateOffset();
                            return {
                              pages: { ...prev.pages },
                              properties: [...prev.properties, ...fetchMoreResult.properties],
                            };
                          },
                        });
                      }
                      return false;
                    }}
                  />
                </React.Fragment>
              );
            }}
          </Query>
        </main>
      </Layout>
    );
  }
}

export default OurProperties;
