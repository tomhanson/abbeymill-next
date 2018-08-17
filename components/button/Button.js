// @flow strict
import * as React from 'react';
import { StyledButton, StyledLink } from './Button.styles';

type Props = {
  primary: ?boolean,
  secondary: ?boolean,
  href: ?string,
  children: React.Node,
};

function Button(props: Props) {
  return (
    <StyledLink href={props.href} primary={props.primary} secondary={props.secondary}>
      {props.children}
    </StyledLink>
  );
}

export default Button;
