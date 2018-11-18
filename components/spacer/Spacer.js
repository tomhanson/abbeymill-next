// @flow strict

import * as React from 'react';
import SpacerStyled from './Spacer.styles';

type Props = {
  children: React.Node,
  paddingTop: number,
  paddingBottom: number,
  centre: boolean,
};

function Spacer({ children, paddingTop = 0, paddingBottom = 0, centre = false }: Props) {
  return (
    <SpacerStyled centre={centre} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {children}
    </SpacerStyled>
  );
}

export default Spacer;
