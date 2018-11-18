import styled, { keyframes, type ReactStyledComponent } from 'styled-components';
import { addRem, fontSize } from '../global/HelperFunctions';
import theme from '../global/ThemeVariables';

const loader = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner: ReactStyledComponent = styled.div`
  overflow: hidden;
  ${fontSize(10)};
  position: relative;
  text-indent: -9999em;
  border-top: 4px solid rgba(255, 255, 255, 0.2);
  border-right: 4px solid rgba(255, 255, 255, 0.2);
  border-bottom: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid ${theme.brandPrimary};
  transform: translateZ(0);
  animation: ${loader} 1.1s infinite linear;
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -20px;
  opacity: 1;
  transition: 0.3s opacity;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:after {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export const LoadableContentWrapper: ReactStyledComponent = styled.section`
  ${addRem('padding-bottom', 50)};
  position: relative;
`;

// .loader,
// .loader: after {
//   border - radius: 50 %;
//   width: 40px;
//   height: 40px;
// }

// .loader {
//   overflow: hidden;
//   font - size: 10px;
//   position: relative;
//   text - indent: -9999em;
//   border - top: 4px solid rgba(255, 255, 255, 0.2);
//   border - right: 4px solid rgba(255, 255, 255, 0.2);
//   border - bottom: 4px solid rgba(255, 255, 255, 0.2);
//   border - left: 4px solid $brand - primary;
//   transform: translateZ(0);
//   animation: load8 1.1s infinite linear;
//   position: absolute;
//   bottom: 15px;
//   left: 50 %;
//   margin - left: -20px;
//   opacity: 0;
//   transition: 0.3s opacity;
// }

//   .fetching - data {
//   .loader {
//   opacity: 1;
// }
// }

// @keyframes load8 {
//   0 % {
//     - webkit - transform: rotate(0deg);
//   transform: rotate(0deg);
// }
// 100 % {
//     - webkit - transform: rotate(360deg);
// transform: rotate(360deg);
//   }
// }

//   .js - infinite - scroll - sold,
// .js - infinite - scroll - dev {
//   @include addREM(padding - bottom, 50);
//   position: relative;
// }
