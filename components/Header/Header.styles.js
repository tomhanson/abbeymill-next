import styled, { type ReactStyledComponent } from 'styled-components';
import { addRem, fontSize } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

export const HeaderPrimary: ReactStyledComponent = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 114px;
  z-index: 10;
  padding: 30px;
`;
export const HeaderScrolled: ReactStyledComponent = styled.div`
  position: fixed;
  background-color: #fff;
  top: -200%;
  left: 0;
  width: 100%;
  height: 114px;
  z-index: 999;
  ${addRem('padding', 10)};
  transition: 1.2s top;
  box-shadow: 1px -4px 13px #000;
`;

export const Nav: ReactStyledComponent = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: white;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  a {
    text-decoration: none;
    font-size: 20px;
    line-height: 1.2;
    ${addRem('padding', 10)};
    font-weight: 900;
    display: block;
  }
`;

export const NavBtn: ReactStyledComponent = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;
export const NavCloseBtn: ReactStyledComponent = styled.button`
  position: absolute;
  top: 35px;
  left: 65px;
  ${fontSize(30)};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const Title: ReactStyledComponent = styled.h1`
  font-family: ${theme.fontPrimary};
  ${addRem('padding-left', 10)};
  @include ${fontSize(20, 24)};
  display: none;
  color: ${theme.fontColorSecondary};
  @media (min-width: 768px) {
    display: block;
  }
`;

// .scrolling {
//   .header--scrolled {
//     top: 0 %;
//     transition: 0.6s top;
//   }
// }

// .header - padding {
//   @include addREM(padding - top, 114);
// }

// .home {
//   .header--primary {
//     .header__nav-toggle {
//       color: $font - color - secondary;
//     }
//   }
// }

// .header__nav - toggle {
//   color: $font - color - primary;
// }

// @media(max - width: 767px) {
//   .header--primary {
//     @include addREM(padding, 15, 0);
//     height: 84px;
//   }
//   .header - padding {
//     @include addREM(padding - top, 84);
//   }
// }
// .nav__button {
//   background: none;
//   border: none;
//   @include addREM(padding, 10, 20);
//   cursor: pointer;
// }

// .nav--primary {
//   display: none;
//   position: fixed;
//   background: white;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 99;
//   a {
//     @include font-size(20);
//     @include addREM(padding, 10);
//     font-weight: 900;
//     display: block;
//   }
// }

// html.nav-open,
// .nav-open body {
//   overflow: hidden;
// }

// .nav-open {
//   .nav--primary {
//     display: flex;
//     animation: animateNav 0.3s 1;
//   }
//   ul {
//     position: relative;
//     top: -40px;
//     animation-name: slideNav;
//     animation-duration: 0.6s;
//     animation-delay: 0.1s;
//     animation-fill-mode: forwards;
//   }
//   li {
//     animation: animateNav 0.4s 1;
//   }
// }

// @keyframes slideNav {
//   from {
//     top: -40px;
//   }
//   to {
//     top: 0px;
//   }
// }

// @keyframes animateNav {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }

// .nav__close {
//   position: absolute;
//   top: 35px;
//   left: 65px;
//   @include font-size(30, 30);
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
// }

// @media (max-width: 767px) {
//   .nav__close {
//     position: fixed;
//   }
//   .nav__button {
//     margin-left: -20px;
//   }
//   .nav__close {
//     top: 0;
//     left: 0;
//     padding: 20px;
//   }
// }
