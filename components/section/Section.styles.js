import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';

const Section = styled.section`
  ${({ paddingTop }) => paddingTop && `${addRem('padding-top', paddingTop)};`};
  ${({ paddingTop, headerPadding }) =>
    headerPadding
      ? `${addRem('padding-top', 114)};`
      : paddingTop
        ? `${addRem('padding-top', paddingTop)};`
        : null};
  ${({ paddingBottom }) => paddingBottom && `${addRem('padding-bottom', paddingBottom)};`};
`;

export default Section;
