// @flow strict

import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import debounce from 'lodash/debounce';
import {
  Container,
  Column,
  Row,
  Flex,
  Spacer,
  ContentTile,
  LoadingSpinner,
  LoadableContentWrapper,
} from '../index';

type PropertyImage = {
  width: string,
  height: string,
  url: string,
};

type PropertyData = {
  title: string,
  slug: string,
  id: string,
  featuredImage: {
    preload: PropertyImage,
    propertyTileSquare: PropertyImage,
  },
};

type Props = {|
  onLoadMore: () => void,
  properties: Array<PropertyData>,
  loading: boolean,
  fetchedAll: boolean,
|};

const Properties = (props: Props) => {
  const { properties, loading, onLoadMore, fetchedAll } = props;

  useEffect(
    () => {
      const fetchMore = debounce(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          onLoadMore();
        }
      }, 300);

      if (fetchedAll) {
        window.removeEventListener('scroll', fetchMore);
      } else {
        window.addEventListener('scroll', fetchMore);
      }

      return function removeListener() {
        window.removeEventListener('scroll', fetchMore);
      };
    },
    [fetchedAll]
  );

  return (
    <LoadableContentWrapper>
      {loading ? <LoadingSpinner /> : null}
      <Container>
        <Row>
          <Flex>
            {properties.map(property => (
              <Column xs={12} md={6} key={property.id}>
                <Spacer paddingBottom={40}>
                  <ContentTile
                    title={property.title}
                    image={property.featuredImage.propertyTileSquare}
                  />
                </Spacer>
              </Column>
            ))}
          </Flex>
        </Row>
      </Container>
    </LoadableContentWrapper>
  );
};

Properties.fragments = {
  property: gql`
    fragment PropertyFields_Property on Property {
      id
      title
      slug
      featuredImage {
        preload {
          width
          height
          url
        }
        propertyTileSquare {
          width
          height
          url
        }
      }
    }
  `,
};

export default Properties;
