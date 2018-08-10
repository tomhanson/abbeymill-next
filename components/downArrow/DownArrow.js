// @flow strict

import * as React from 'react';
import DownArrowStyled from './DownArrow.styles';

type Props = {
  children: React.Node,
};

function DownArrow({ children }: Props) {
  return <DownArrowStyled>{children}</DownArrowStyled>;
}

export default DownArrow;
