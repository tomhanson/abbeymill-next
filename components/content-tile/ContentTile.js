// @flow strict
import * as React from 'react';
import StyledContentTile from './ContentTile.styles';

type Props = {
  children: React.Node,
};

function ContentTile(props: Props) {
  return <StyledContentTile>{props.children}</StyledContentTile>;
}

export default ContentTile;
