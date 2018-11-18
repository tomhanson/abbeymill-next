import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

export const SearchInput = styled.input`
  background-color: transparent;
  ${addRem('padding', 10)};
  width: 100%;
  color: ${theme.fontColorSecondary};
  font-size: inherit;
  ${({ primary, alt }) =>
    primary
      ? alt
        ? `
      width: 100%;
      max-width: 240px;
      float: right;
      border: 1px solid ${theme.fontColorSecondary};
      &::-webkit-input-placeholder {
        color: ${theme.fontColorSecondary};
      }
      &::-moz-placeholder {
        color: $${theme.fontColorSecondary};
      }
      &:-ms-input-placeholder {
      
        color: ${theme.fontColorSecondary};
      }
      &:-moz-placeholder {
        color: ${theme.fontColorSecondary};
      }`
        : `
      width: 100%;
      max-width: 240px;
      float: right;
      border: 1px solid ${theme.fontColorPrimary};
      &::-webkit-input-placeholder {
        color: ${theme.fontColorPrimary};
      }
      &::-moz-placeholder {
        color: $${theme.fontColorPrimary};
      }
      &:-ms-input-placeholder {
      
        color: ${theme.fontColorPrimary};
      }
      &:-moz-placeholder {
        color: ${theme.fontColorPrimary};
      }`
      : `
      width: 100%;
      max-width: 330px;
      border: 1px solid #979797;`};
`;

export const SearchButton = styled.input`
  ${({ primary }) =>
    primary
      ? `display: none;`
      : `
    background-color: ${theme.brandFour};
    color: ${theme.fontColorSecondary};
    ${addRem('padding', 10)};
    border: 1px solid ${theme.brandFour};
    transition: 0.3s background-color;
    &:hover,
    &:active,
    &:focus {
      background-color: ${theme.brandFour};
    }`};
`;

export const SearchFormWrapper = styled.div`
  ${({ primary }) =>
    primary
      ? `  width: 100%;
  max-width: 240px;
  float: right;

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${theme.fontColorSecondary};
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${theme.fontColorSecondary};
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${theme.fontColorSecondary};
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${theme.fontColorSecondary};
  }`
      : `
  width: 100%;
  max-width: 330px;
  label {
    width: 100%;
    max-width: 330px;
  }
  .search-form {

  }
  `};
`;

export const SearchForm = styled.form`
  ${({ primary }) =>
    !primary
      ? `display: flex;
    justify-content: flex-end;`
      : null};
`;
