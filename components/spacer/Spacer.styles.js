import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';

const Spacer = styled.div`
  overflow: hidden;
  ${({ paddingTop }) => paddingTop && `${addRem('padding-top', paddingTop)};`};
  ${({ paddingBottom }) => paddingBottom && `${addRem('padding-bottom', paddingBottom)};`};
  ${({ centre }) => centre && `text-align: center`};
`;

export default Spacer;
