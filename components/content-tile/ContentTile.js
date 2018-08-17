// @flow strict
import * as React from 'react';
import { StyledContentTile, Content, Image, Link } from './ContentTile.styles';

type Props = {
  title: string,
  subtitle: ?string,
  image: {
    url: string,
    height: number,
    width: number,
  },
};

function ContentTile({ title, subtitle, image }: Props) {
  return (
    <StyledContentTile>
      <figure>
        <Image src={image.url} alt={title} />
      </figure>
      <Content>
        <h3 className="spacing-xs--btm-only">{title}</h3>
        {subtitle && <h6 className="spacing-xs--btm-only">{subtitle}</h6>}
        <Link>
          <h5>View</h5>
        </Link>
      </Content>
    </StyledContentTile>
  );
}

export default ContentTile;
