import styled from 'styled-components';
import { addRem } from '../global/HelperFunctions';
import gridWidthHelper from './GridWidthHelper';
// container
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${addRem('padding-left', 15)};
  ${addRem('padding-right', 15)};

  @media (min-width: 768px) {
    width: ${props => !props.fluid && '750px'};
  }
  @media (min-width: 992px) {
    width: ${props => !props.fluid && ' 970px;'};
  }
  @media (min-width: 1200px) {
    width: ${props => (props.fluid ? '100%' : '1170px')};
  }

  &:before {
    content: ' ';
    display: table;
  }
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
`;

// row
export const Row = styled.div`
  ${addRem('margin-left', -15)};
  ${addRem('margin-right', -15)};

  &:before {
    content: ' ';
    display: table;
  }
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
`;

// col - xs, sm, md, lg (1-12)
export const Column = styled.div`
${props => (props.textCenter ? `text-align: center;` : null)}
  ${addRem('padding-left', 15)};
  ${addRem('padding-right', 15)};

  min-height: 1px;
  ${props => (props.xs ? `width: ${gridWidthHelper(props.xs)};   float: left;` : null)}
  ${props => (props.xsPush ? `left: ${gridWidthHelper(props.xsPush)};   float: left;` : null)}
  ${props => (props.xsPull ? `right: ${gridWidthHelper(props.xsPull)};  float: left;` : null)}
  ${props =>
    props.xsOffset ? `margin-left: ${gridWidthHelper(props.xsOffset)};  float: left;` : null}
  ${props =>
    props.sm
      ? `
        @media (min-width: 768px) {
          float: left;
          width: ${gridWidthHelper(props.sm)}
        }`
      : null} 
  ${props =>
    props.smPush
      ? `
        @media (min-width: 768px) {
          left: ${gridWidthHelper(props.smPush)}
        }`
      : null} 
  ${props =>
    props.smPull
      ? `
        @media (min-width: 768px) {
          right: ${gridWidthHelper(props.smPull)}
        }`
      : null} 
  ${props =>
    props.smOffset
      ? `
        @media (min-width: 768px) {
          margin-left: ${gridWidthHelper(props.smOffset)}
        }`
      : null} 
  ${props =>
    props.md
      ? `
        @media (min-width: 992px) {
          float: left;
          width: ${gridWidthHelper(props.md)}
        }`
      : null}
  ${props =>
    props.mdPush
      ? `
        @media (min-width: 992px) {
          left: ${gridWidthHelper(props.mdPush)}
        }`
      : null}
  ${props =>
    props.mdPull
      ? `
        @media (min-width: 992px) {
          right: ${gridWidthHelper(props.mdPull)}
        }`
      : null}
  ${props =>
    props.mdOffset
      ? `
        @media (min-width: 992px) {
          margin-left: ${gridWidthHelper(props.mdOffset)}
        }`
      : null}
  ${props =>
    props.lg
      ? `
          @media (min-width: 1200px) {
            float: left;
            width: ${gridWidthHelper(props.lg)}
          }`
      : null}
    }
  ${props =>
    props.lgPush
      ? `
        @media (min-width: 1200px) {
          left: ${gridWidthHelper(props.lgPush)}
        }`
      : null}
  ${props =>
    props.lgPull
      ? `
        @media (min-width: 1200px) {
          right: ${gridWidthHelper(props.lgPull)}
        }`
      : null}
  ${props =>
    props.lgOffset
      ? `
        @media (min-width: 1200px) {
          margin-left: ${gridWidthHelper(props.lgOffset)}
        }`
      : null}
`;

// .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
//   float: left;
// }
// .col-xs-12 {
//   width: 100%;
// }
// .col-xs-11 {
//   width: 91.66666667%;
// }
// .col-xs-10 {
//   width: 83.33333333%;
// }
// .col-xs-9 {
//   width: 75%;
// }
// .col-xs-8 {
//   width: 66.66666667%;
// }
// .col-xs-7 {
//   width: 58.33333333%;
// }
// .col-xs-6 {
//   width: 50%;
// }
// .col-xs-5 {
//   width: 41.66666667%;
// }
// .col-xs-4 {
//   width: 33.33333333%;
// }
// .col-xs-3 {
//   width: 25%;
// }
// .col-xs-2 {
//   width: 16.66666667%;
// }
// .col-xs-1 {
//   width: 8.33333333%;
// }
// .col-xs-pull-12 {
//   right: 100%;
// }
// .col-xs-pull-11 {
//   right: 91.66666667%;
// }
// .col-xs-pull-10 {
//   right: 83.33333333%;
// }
// .col-xs-pull-9 {
//   right: 75%;
// }
// .col-xs-pull-8 {
//   right: 66.66666667%;
// }
// .col-xs-pull-7 {
//   right: 58.33333333%;
// }
// .col-xs-pull-6 {
//   right: 50%;
// }
// .col-xs-pull-5 {
//   right: 41.66666667%;
// }
// .col-xs-pull-4 {
//   right: 33.33333333%;
// }
// .col-xs-pull-3 {
//   right: 25%;
// }
// .col-xs-pull-2 {
//   right: 16.66666667%;
// }
// .col-xs-pull-1 {
//   right: 8.33333333%;
// }
// .col-xs-pull-0 {
//   right: auto;
// }
// .col-xs-push-12 {
//   left: 100%;
// }
// .col-xs-push-11 {
//   left: 91.66666667%;
// }
// .col-xs-push-10 {
//   left: 83.33333333%;
// }
// .col-xs-push-9 {
//   left: 75%;
// }
// .col-xs-push-8 {
//   left: 66.66666667%;
// }
// .col-xs-push-7 {
//   left: 58.33333333%;
// }
// .col-xs-push-6 {
//   left: 50%;
// }
// .col-xs-push-5 {
//   left: 41.66666667%;
// }
// .col-xs-push-4 {
//   left: 33.33333333%;
// }
// .col-xs-push-3 {
//   left: 25%;
// }
// .col-xs-push-2 {
//   left: 16.66666667%;
// }
// .col-xs-push-1 {
//   left: 8.33333333%;
// }
// .col-xs-push-0 {
//   left: auto;
// }
// .col-xs-offset-12 {
//   margin-left: 100%;
// }
// .col-xs-offset-11 {
//   margin-left: 91.66666667%;
// }
// .col-xs-offset-10 {
//   margin-left: 83.33333333%;
// }
// .col-xs-offset-9 {
//   margin-left: 75%;
// }
// .col-xs-offset-8 {
//   margin-left: 66.66666667%;
// }
// .col-xs-offset-7 {
//   margin-left: 58.33333333%;
// }
// .col-xs-offset-6 {
//   margin-left: 50%;
// }
// .col-xs-offset-5 {
//   margin-left: 41.66666667%;
// }
// .col-xs-offset-4 {
//   margin-left: 33.33333333%;
// }
// .col-xs-offset-3 {
//   margin-left: 25%;
// }
// .col-xs-offset-2 {
//   margin-left: 16.66666667%;
// }
// .col-xs-offset-1 {
//   margin-left: 8.33333333%;
// }
// .col-xs-offset-0 {
//   margin-left: 0;
// }
// @media (min-width: 768px) {
//   .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
//     float: left;
//   }
//   .col-sm-12 {
//     width: 100%;
//   }
//   .col-sm-11 {
//     width: 91.66666667%;
//   }
//   .col-sm-10 {
//     width: 83.33333333%;
//   }
//   .col-sm-9 {
//     width: 75%;
//   }
//   .col-sm-8 {
//     width: 66.66666667%;
//   }
//   .col-sm-7 {
//     width: 58.33333333%;
//   }
//   .col-sm-6 {
//     width: 50%;
//   }
//   .col-sm-5 {
//     width: 41.66666667%;
//   }
//   .col-sm-4 {
//     width: 33.33333333%;
//   }
//   .col-sm-3 {
//     width: 25%;
//   }
//   .col-sm-2 {
//     width: 16.66666667%;
//   }
//   .col-sm-1 {
//     width: 8.33333333%;
//   }
//   .col-sm-pull-12 {
//     right: 100%;
//   }
//   .col-sm-pull-11 {
//     right: 91.66666667%;
//   }
//   .col-sm-pull-10 {
//     right: 83.33333333%;
//   }
//   .col-sm-pull-9 {
//     right: 75%;
//   }
//   .col-sm-pull-8 {
//     right: 66.66666667%;
//   }
//   .col-sm-pull-7 {
//     right: 58.33333333%;
//   }
//   .col-sm-pull-6 {
//     right: 50%;
//   }
//   .col-sm-pull-5 {
//     right: 41.66666667%;
//   }
//   .col-sm-pull-4 {
//     right: 33.33333333%;
//   }
//   .col-sm-pull-3 {
//     right: 25%;
//   }
//   .col-sm-pull-2 {
//     right: 16.66666667%;
//   }
//   .col-sm-pull-1 {
//     right: 8.33333333%;
//   }
//   .col-sm-pull-0 {
//     right: auto;
//   }
//   .col-sm-push-12 {
//     left: 100%;
//   }
//   .col-sm-push-11 {
//     left: 91.66666667%;
//   }
//   .col-sm-push-10 {
//     left: 83.33333333%;
//   }
//   .col-sm-push-9 {
//     left: 75%;
//   }
//   .col-sm-push-8 {
//     left: 66.66666667%;
//   }
//   .col-sm-push-7 {
//     left: 58.33333333%;
//   }
//   .col-sm-push-6 {
//     left: 50%;
//   }
//   .col-sm-push-5 {
//     left: 41.66666667%;
//   }
//   .col-sm-push-4 {
//     left: 33.33333333%;
//   }
//   .col-sm-push-3 {
//     left: 25%;
//   }
//   .col-sm-push-2 {
//     left: 16.66666667%;
//   }
//   .col-sm-push-1 {
//     left: 8.33333333%;
//   }
//   .col-sm-push-0 {
//     left: auto;
//   }
//   .col-sm-offset-12 {
//     margin-left: 100%;
//   }
//   .col-sm-offset-11 {
//     margin-left: 91.66666667%;
//   }
//   .col-sm-offset-10 {
//     margin-left: 83.33333333%;
//   }
//   .col-sm-offset-9 {
//     margin-left: 75%;
//   }
//   .col-sm-offset-8 {
//     margin-left: 66.66666667%;
//   }
//   .col-sm-offset-7 {
//     margin-left: 58.33333333%;
//   }
//   .col-sm-offset-6 {
//     margin-left: 50%;
//   }
//   .col-sm-offset-5 {
//     margin-left: 41.66666667%;
//   }
//   .col-sm-offset-4 {
//     margin-left: 33.33333333%;
//   }
//   .col-sm-offset-3 {
//     margin-left: 25%;
//   }
//   .col-sm-offset-2 {
//     margin-left: 16.66666667%;
//   }
//   .col-sm-offset-1 {
//     margin-left: 8.33333333%;
//   }
//   .col-sm-offset-0 {
//     margin-left: 0;
//   }
// }
// @media (min-width: 992px) {
//   .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
//     float: left;
//   }
//   .col-md-12 {
//     width: 100%;
//   }
//   .col-md-11 {
//     width: 91.66666667%;
//   }
//   .col-md-10 {
//     width: 83.33333333%;
//   }
//   .col-md-9 {
//     width: 75%;
//   }
//   .col-md-8 {
//     width: 66.66666667%;
//   }
//   .col-md-7 {
//     width: 58.33333333%;
//   }
//   .col-md-6 {
//     width: 50%;
//   }
//   .col-md-5 {
//     width: 41.66666667%;
//   }
//   .col-md-4 {
//     width: 33.33333333%;
//   }
//   .col-md-3 {
//     width: 25%;
//   }
//   .col-md-2 {
//     width: 16.66666667%;
//   }
//   .col-md-1 {
//     width: 8.33333333%;
//   }
//   .col-md-pull-12 {
//     right: 100%;
//   }
//   .col-md-pull-11 {
//     right: 91.66666667%;
//   }
//   .col-md-pull-10 {
//     right: 83.33333333%;
//   }
//   .col-md-pull-9 {
//     right: 75%;
//   }
//   .col-md-pull-8 {
//     right: 66.66666667%;
//   }
//   .col-md-pull-7 {
//     right: 58.33333333%;
//   }
//   .col-md-pull-6 {
//     right: 50%;
//   }
//   .col-md-pull-5 {
//     right: 41.66666667%;
//   }
//   .col-md-pull-4 {
//     right: 33.33333333%;
//   }
//   .col-md-pull-3 {
//     right: 25%;
//   }
//   .col-md-pull-2 {
//     right: 16.66666667%;
//   }
//   .col-md-pull-1 {
//     right: 8.33333333%;
//   }
//   .col-md-pull-0 {
//     right: auto;
//   }
//   .col-md-push-12 {
//     left: 100%;
//   }
//   .col-md-push-11 {
//     left: 91.66666667%;
//   }
//   .col-md-push-10 {
//     left: 83.33333333%;
//   }
//   .col-md-push-9 {
//     left: 75%;
//   }
//   .col-md-push-8 {
//     left: 66.66666667%;
//   }
//   .col-md-push-7 {
//     left: 58.33333333%;
//   }
//   .col-md-push-6 {
//     left: 50%;
//   }
//   .col-md-push-5 {
//     left: 41.66666667%;
//   }
//   .col-md-push-4 {
//     left: 33.33333333%;
//   }
//   .col-md-push-3 {
//     left: 25%;
//   }
//   .col-md-push-2 {
//     left: 16.66666667%;
//   }
//   .col-md-push-1 {
//     left: 8.33333333%;
//   }
//   .col-md-push-0 {
//     left: auto;
//   }
//   .col-md-offset-12 {
//     margin-left: 100%;
//   }
//   .col-md-offset-11 {
//     margin-left: 91.66666667%;
//   }
//   .col-md-offset-10 {
//     margin-left: 83.33333333%;
//   }
//   .col-md-offset-9 {
//     margin-left: 75%;
//   }
//   .col-md-offset-8 {
//     margin-left: 66.66666667%;
//   }
//   .col-md-offset-7 {
//     margin-left: 58.33333333%;
//   }
//   .col-md-offset-6 {
//     margin-left: 50%;
//   }
//   .col-md-offset-5 {
//     margin-left: 41.66666667%;
//   }
//   .col-md-offset-4 {
//     margin-left: 33.33333333%;
//   }
//   .col-md-offset-3 {
//     margin-left: 25%;
//   }
//   .col-md-offset-2 {
//     margin-left: 16.66666667%;
//   }
//   .col-md-offset-1 {
//     margin-left: 8.33333333%;
//   }
//   .col-md-offset-0 {
//     margin-left: 0;
//   }
// }
// @media (min-width: 1200px) {
//   .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
//     float: left;
//   }
//   .col-lg-12 {
//     width: 100%;
//   }
//   .col-lg-11 {
//     width: 91.66666667%;
//   }
//   .col-lg-10 {
//     width: 83.33333333%;
//   }
//   .col-lg-9 {
//     width: 75%;
//   }
//   .col-lg-8 {
//     width: 66.66666667%;
//   }
//   .col-lg-7 {
//     width: 58.33333333%;
//   }
//   .col-lg-6 {
//     width: 50%;
//   }
//   .col-lg-5 {
//     width: 41.66666667%;
//   }
//   .col-lg-4 {
//     width: 33.33333333%;
//   }
//   .col-lg-3 {
//     width: 25%;
//   }
//   .col-lg-2 {
//     width: 16.66666667%;
//   }
//   .col-lg-1 {
//     width: 8.33333333%;
//   }
//   .col-lg-pull-12 {
//     right: 100%;
//   }
//   .col-lg-pull-11 {
//     right: 91.66666667%;
//   }
//   .col-lg-pull-10 {
//     right: 83.33333333%;
//   }
//   .col-lg-pull-9 {
//     right: 75%;
//   }
//   .col-lg-pull-8 {
//     right: 66.66666667%;
//   }
//   .col-lg-pull-7 {
//     right: 58.33333333%;
//   }
//   .col-lg-pull-6 {
//     right: 50%;
//   }
//   .col-lg-pull-5 {
//     right: 41.66666667%;
//   }
//   .col-lg-pull-4 {
//     right: 33.33333333%;
//   }
//   .col-lg-pull-3 {
//     right: 25%;
//   }
//   .col-lg-pull-2 {
//     right: 16.66666667%;
//   }
//   .col-lg-pull-1 {
//     right: 8.33333333%;
//   }
//   .col-lg-pull-0 {
//     right: auto;
//   }
//   .col-lg-push-12 {
//     left: 100%;
//   }
//   .col-lg-push-11 {
//     left: 91.66666667%;
//   }
//   .col-lg-push-10 {
//     left: 83.33333333%;
//   }
//   .col-lg-push-9 {
//     left: 75%;
//   }
//   .col-lg-push-8 {
//     left: 66.66666667%;
//   }
//   .col-lg-push-7 {
//     left: 58.33333333%;
//   }
//   .col-lg-push-6 {
//     left: 50%;
//   }
//   .col-lg-push-5 {
//     left: 41.66666667%;
//   }
//   .col-lg-push-4 {
//     left: 33.33333333%;
//   }
//   .col-lg-push-3 {
//     left: 25%;
//   }
//   .col-lg-push-2 {
//     left: 16.66666667%;
//   }
//   .col-lg-push-1 {
//     left: 8.33333333%;
//   }
//   .col-lg-push-0 {
//     left: auto;
//   }
//   .col-lg-offset-12 {
//     margin-left: 100%;
//   }
//   .col-lg-offset-11 {
//     margin-left: 91.66666667%;
//   }
//   .col-lg-offset-10 {
//     margin-left: 83.33333333%;
//   }
//   .col-lg-offset-9 {
//     margin-left: 75%;
//   }
//   .col-lg-offset-8 {
//     margin-left: 66.66666667%;
//   }
//   .col-lg-offset-7 {
//     margin-left: 58.33333333%;
//   }
//   .col-lg-offset-6 {
//     margin-left: 50%;
//   }
//   .col-lg-offset-5 {
//     margin-left: 41.66666667%;
//   }
//   .col-lg-offset-4 {
//     margin-left: 33.33333333%;
//   }
//   .col-lg-offset-3 {
//     margin-left: 25%;
//   }
//   .col-lg-offset-2 {
//     margin-left: 16.66666667%;
//   }
//   .col-lg-offset-1 {
//     margin-left: 8.33333333%;
//   }
//   .col-lg-offset-0 {
//     margin-left: 0;
//   }
// }

// border - color: ${
//   (props: ButtonProps) =>
//     props.primary ?
//       '#b55202' :
//       props.secondary ?
//         '#006db7' :
//         props.disabled ?
//           'none' :
//           '#b55202'
// };
