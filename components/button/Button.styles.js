import styled, { type StyledReactComponent } from 'styled-components';
import { addRem, fontSize } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

export const StyledButton: StyledReactComponent = styled.button`
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 1.428571429;
  border-radius: 4px;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  ${fontSize(14)};
  ${addRem('padding', 10)};
  color: ${theme.fontColorSecondary};
  -webkit-appearance: none;
  ${props => (props.secondary ? `border: 1px solid ${theme.brandThree}` : `border: none;`)};
  ${props =>
    props.primary
      ? `  
  background-color: ${theme.brandFour};
  transition: 0.3s background-color;`
      : `background-color: transparent;`};
  &:hover,
  &:active,
  &:focus {
    ${props => (props.primary ? `background-color: darken($brand-four, 10%)` : null)};
    color: ${theme.fontColorSecondary};
  }
`;

// display: inline-block;
// margin-bottom: 0;
// font-weight: 400;
// text-align: center;
// vertical-align: middle;
// -ms-touch-action: manipulation;
// touch-action: manipulation;
// cursor: pointer;
// background-image: none;
// border: 1px solid transparent;
// white-space: nowrap;
// padding: 6px 12px;
// font-size: 14px;
// line-height: 1.428571429;
// border-radius: 4px;
// -webkit-user-select: none;
// -moz-user-select: none;
// -ms-user-select: none;
// user-select: none;

export const StyledLink: StyledReactComponent = styled.a`
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 1.428571429;
  border-radius: 4px;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  ${fontSize(14)};
  ${addRem('padding', 10)};
  color: ${theme.fontColorSecondary};
  -webkit-appearance: none;
  ${props => (props.secondary ? `border: 1px solid ${theme.brandThree}` : `border: none;`)};
  ${props =>
    props.primary
      ? `  
background-color: ${theme.brandFour};
transition: 0.3s background-color;`
      : `background-color: transparent;`};
  &:hover,
  &:active,
  &:focus {
    ${props => (props.primary ? `background-color: darken($brand-four, 10%)` : null)};
    color: ${theme.fontColorSecondary};
  }
`;
