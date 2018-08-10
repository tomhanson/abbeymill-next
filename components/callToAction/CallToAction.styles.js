import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

export const Cta = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${theme.brandPrimary};
`;
export const CtaContent = styled.div`
  ${addRem('padding-top', 65)};
  ${addRem('padding-bottom', 65)};
  @media (max-width: 991px) {
    ${addRem('padding-top', 20)};
    ${addRem('padding-bottom', 20)};
  }
`;

export const CtaGridOverride = styled.div`
  background-image: url('${props => props.image.url}');
  background-size: cover;
  background-position: center;
  @media (min-width: 992px) {
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    padding-top: 0;
  }
  @media (max-width: 767px) {
    height: 200px;
  }
`;

//   .cta {
//     overflow: hidden;
// }

// .cta__content {
//   @include addREM(padding - top, 65);
//   @include addREM(padding - bottom, 65);
// }

// //only over 991px
// @media(min - width: 992px) {
//   .cta__overide - grid - position {
//     padding: 0;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     width: 50 %;
//     padding - top: 0;
//   }
// }

// @media(max - width: 767px) {
//   .cta__overide - grid - position {
//     height: 200px;
//   }
// }

// @media(max - width: 991px) {
//   .cta__content {
//     @include addREM(padding - top, 20);
//     @include addREM(padding - bottom, 20);
//   }
// }
