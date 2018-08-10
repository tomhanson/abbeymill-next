// @flow strict

import * as React from 'react';
import SectionStyled from './Section.styles';

type Props = {
  children: React.Node,
  paddingTop: number,
  paddingBottom: number,
};

function Section({ children, paddingTop = 0, paddingBottom = 0 }: Props) {
  return (
    <SectionStyled paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {children}
    </SectionStyled>
  );
}

export default Section;
