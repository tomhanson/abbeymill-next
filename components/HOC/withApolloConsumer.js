// @flow strict

import * as React from 'react';
import { ApolloConsumer } from 'react-apollo';

type Props = {||};

function withApolloConsumer(WrappedComponent: React.ComponentType<*>) {
  const WithApolloConsumer = (props: Props) => (
    <ApolloConsumer>{client => <WrappedComponent client={client} {...props} />}</ApolloConsumer>
  );
  return WithApolloConsumer;
}

export default withApolloConsumer;
