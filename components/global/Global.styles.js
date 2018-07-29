import styled, { type ReactStyledComponent } from 'styled-components';
import { fontSize } from './HelperFunctions';
import theme from './ThemeVariables';

export const H1: ReactStyledComponent = styled.h1`
  ${fontSize(32, 44)};
  font-family: ${theme.fontSecondary};
  ${props => (props.secondary ? `color : ${theme.fontColorSecondary}` : null)}};
  @media (max-width: 767px) {
    ${fontSize(24, 34)};
  }
`;

export const H5: ReactStyledComponent = styled.h5`
  ${fontSize(16, 24)};
  font-family: ${theme.fontSecondary};
  ${props => (props.secondary ? `color : ${theme.fontColorSecondary}` : null)}};
  @media (max-width: 767px) {
    ${fontSize(16, 24)};
  }
`;
