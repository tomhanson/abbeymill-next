import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

export const SearchInput = styled.input(
  { type: 'text' },
  `
  background-color: transparent;
  ${addRem('padding', 10)};
  width: 100%;
  border: 1px solid ${theme.fontColorSecondary};
  color: ${theme.fontColorSecondary};
`
);
export const SearchFormWrapper = styled.div`
  width: 100%;
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
  }
`;
