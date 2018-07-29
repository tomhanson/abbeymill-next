const gridWidthHelper = size => {
  switch (size) {
    case 0:
      return '0';
    case 1:
      return '8.333333%';
    case 2:
      return '16.666667%';
    case 3:
      return '25%';
    case 4:
      return '33.333333%';
    case 5:
      return '41.666667%';
    case 6:
      return '50%';
    case 7:
      return '58.333333%';
    case 8:
      return '66.666667%';
    case 9:
      return '75%';
    case 10:
      return '83.333333%';
    case 11:
      return '91.666667%';
    default:
    case 12:
      return '100%';
  }
};
export default gridWidthHelper;
