// @flow strict

import * as React from 'react';
import SpacerStyled from './Spacer.styles';

type Props = {
  children: React.Node,
  paddingTop: number,
  paddingBottom: number,
};

function Spacer({ children, paddingTop = 0, paddingBottom = 0 }: Props) {
  return (
    <SpacerStyled paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {children}
    </SpacerStyled>
  );
}

export default Spacer;
