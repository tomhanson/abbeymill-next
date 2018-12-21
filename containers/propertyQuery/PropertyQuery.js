// @flow strict
import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Container, Column, Row, Section, Spacer, PropertyGrid } from '../../components';

import { H1, H5 } from '../../components/global/Global.styles';

type Props = {|
  results: number,
  offset: number,
  exclude: number,
  filter: string,
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

let currentOffset = 0;

const OurProperties = (props: Props) => {
  const [defaultVariables] = useState({
    results: props.results,
    offset: props.offset,
    exclude: props.exclude,
    filter: props.filter,
  });
  const [propertiesToFetch] = useState(10);
  const [fetchedAll, updateFetchedAll] = useState(false);

  const [offset, updateOffset] = useState(10);
  currentOffset = offset;

  return (
    <Query
      query={OUR_PROPERTIES_QUERY}
      variables={defaultVariables}
      fetchPolicy="cache-and-network"
    >
      {({ loading, error, data, fetchMore }) => {
        if (error) return `Error! ${error.message}`;
        const { pages } = data;
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
              fetchedAll={fetchedAll}
              properties={propertyData}
              onLoadMore={() => {
                if (!fetchedAll) {
                  return fetchMore({
                    variables: {
                      results: propertiesToFetch,
                      offset: currentOffset,
                      exclude: 3,
                      filter: 'SOLD',
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult.properties.length) {
                        updateFetchedAll(true);
                        return prev;
                      }
                      updateOffset(currentOffset + 10);
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
  );
};

export default OurProperties;
