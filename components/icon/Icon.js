// @flow strict

import * as React from 'react';
import IconStyled from './Icon.styles';

type Props = {
  src: string,
  alt: string,
  maxWidth: number,
};

function Section({ src, alt, maxWidth }: Props) {
  return <IconStyled src={src} alt={alt} maxWidth={maxWidth} />;
}

export default Section;
