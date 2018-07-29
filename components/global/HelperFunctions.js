// @mixin addREM($property, $values...) {
//   $px: ();
//   $rem: ();
//   @each $value in $values {
//     @if $value == 0 or $value == auto {
//       $px: append($px, $value);
//       $rem: append($rem, $value);
//     } @else {
//       $px: append($px, ($value + px));
//       $rem: append($rem, ($value / 10 + rem));
//     }
//   }
//   #{ $property }: $px;
//   #{ $property }: $rem;
// }
export const fontSize = (sizeValue = 14, lineHeight = null) =>
  `
  font-size: ${sizeValue}px;
  font-size: ${sizeValue / 10}rem;
  line-height: ${lineHeight ? (lineHeight / sizeValue).toFixed(3) : 1.2};
`;

export const addRem = (property, ...values) => {
  const px = [];
  const rem = [];
  values.forEach(value => {
    if (value === 'auto' || value === 0) {
      px.push(value);
      rem.push(value);
    } else {
      px.push(`${value}px`);
      rem.push(`${value / 10}rem`);
    }
  });
  return `
    ${property}: ${px.toString().replace(/,/g, ' ')};
    ${property}: ${rem.toString().replace(/,/g, ' ')};
    `;
};
