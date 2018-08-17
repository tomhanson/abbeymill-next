import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

export const StyledContentTile = styled.div`
  position: relative;
  ${addRem('padding', 20)};

  &:before {
    content: '';
    position: absolute;
    border: 1px solid ${theme.brandSecondary};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  @media (max-width: 767px) {
    padding: 0;
    &:before {
      left: 0;
    }
    &:after {
      display: none;
    }
  }
`;

export const Image = styled.img`
  vertical-align: middle;
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${theme.whiteBgOverlay};
  position: absolute;
  top: 50px;
  left: 50px;
  ${addRem('padding', 15)};
  width: 100%;
  max-width: 310px;
  z-index: 100;

  h3,
  h6 {
    ${addRem('margin-bottom', 10)};
  }
  @media (min-width: 991px) and (max-width: 1199px) {
    top: 40px;
    left: 40px;
  }
  @media (max-width: 767px) {
    position: relative;
    top: 0;
    left: 0;
    max-width: 100%;
    border: 1px solid ${theme.brandSecondary};
  }
`;
export const Link = styled.a`
  color: ${theme.fontColorTertiary};
  &:hover {
    color: ${theme.fontColorTertiary};
  }
`;

// .slick-slide {
//   .property-tile {
//     &:after {
//       content: "";
//       position: absolute;
//       top: 20px;
//       left: 20px;
//       right: 20px;
//       bottom: 20px;
//       background-color: $bg-overlay;
//     }
//   }
// }

// .slick-active {
//   .property-tile {
//     &:after {
//       opacity: 0;
//     }
//   }
// }
