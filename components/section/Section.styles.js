import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';

const Section = styled.section`
  ${({ paddingTop }) => paddingTop && `${addRem('padding-top', paddingTop)};`};
  ${({ paddingBottom }) => paddingBottom && `${addRem('padding-bottom', paddingBottom)};`};
`;

export default Section;
