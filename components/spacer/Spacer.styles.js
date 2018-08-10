import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';

const Spacer = styled.div`
  ${({ paddingTop }) => paddingTop && `${addRem('padding-top', paddingTop)};`};
  ${({ paddingBottom }) => paddingBottom && `${addRem('padding-bottom', paddingBottom)};`};
`;

export default Spacer;
