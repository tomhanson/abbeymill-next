// @flow strict

import * as React from 'react';
import { BannerStyled } from './Banner.styles';

type Props = {
  children: React.Node,
  img: string,
};

const Banner = ({ children, img }: Props) => (
  <BannerStyled img={img}>
    {children}
    {/* <BannerHeadline>{children}</BannerHeadline> */}
  </BannerStyled>
);

export default Banner;
