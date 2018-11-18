import styled, { type ReactStyledComponent } from 'styled-components';
import { addRem } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

export const FooterBorder: ReactStyledComponent = styled.div`
  border-top: 1px solid ${theme.brandPrimary};
  ${addRem('padding', 30, 0)};
  clear: both;
`;
